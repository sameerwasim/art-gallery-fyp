'use strict';
var bcrypt = require('bcrypt')
var dbConn = require('../../config/db.config')
var jwt = require('jsonwebtoken')
var app = require('../../config/app.config')
var url = app.url
const jwtSecret = app.jwt
const sendEmail = require('../../email/send.js')
const saltRounds = 10;

var Auth = function(auth){
  this.id        = auth.id;
  this.image      = auth.image;
  this.name      = auth.name;
  this.username  = auth.username;
  this.password  = auth.password;
  this.email  = auth.email;
  this.phone  = auth.phone;
  this.description  = auth.description;
};

Auth.findAll = function (data, result) {

  const limit = data.limit ? `limit ${parseInt(data.limit)}` : ''
  const artist = data.artist ? `AND artist = ${parseInt(data.artist)}` : ''
  const category = data.category ? `AND category = ${parseInt(data.category)}` : ''

  dbConn.query(`SELECT id, name, username, image FROM users WHERE isVerified = 1
    ${artist} ${category} ORDER BY createdAt DESC ${limit}`,
    (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0, artists: res})
  })
}

Auth.findOne = function (username, result) {

  dbConn.query(`SELECT users.id, users.name, users.username,
    users.phone, users.email, users.description, users.image,
    (SELECT avg(rating) FROM reviews WHERE reviews.artwork IN (
      SELECT id FROM artworks WHERE artworks.artist = users.id
    )) as rating
    FROM users WHERE username = ?`,
    [username], (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0, artist: res[0]})
  })
}

Auth.find = function (auth, result) {
  dbConn.query(`SELECT id, image, name, username, email, description,
    isVerified, (SELECT count(*) FROM artworks WHERE artworks.artist = ? ) as totalArtworks
    FROM users WHERE id = ?`, [auth.id, auth.id], (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, res[0])
  })
}

// registers a user
Auth.register = function (auth, result) {
  dbConn.query("SELECT * FROM users WHERE username = ? OR email = ?",
  [auth.username, auth.email], function (err, res) {
    if(err) {
      console.log('error: ', err);
      result(null, {error: 1});
    } else {
      if (res.length == 0) {
        bcrypt.hash(auth.password, saltRounds, function(err, hash) {
          dbConn.query('INSERT INTO users SET image="no-user-profile-picture.jpeg", name = ?, username = ?, email = ?, password = ?',
          [auth.name, auth.username.toString(), auth.email, hash], async (err, res) => {
            if (err) {
              console.log('error: ', err);
              result(null, {error: 1})
            } else {
              const response = await sendEmail(
                'Verify your account', auth.email, '',
                '<p>Thanks for joining us.</p>', `${url}verify-account/${res.insertId}`, 'Verify your account')
              result(null, {error: 0})
            }
          })
        });
      } else {
        result(null, {error: 1});
      }
    }
  });
};


Auth.resetPassword = function (auth, result) {
  dbConn.query("SELECT * FROM users WHERE username = ? OR email = ?",
  [auth.email, auth.email], function (err, res) {
    if(err) {
      console.log('error : ', err);
      result(null, {error: 1});
    } else {
      if (res[0]) {
        const random = (Math.floor(100000 + Math.random() * 900000)).toString(16)
        bcrypt.hash(random, saltRounds, function(err, hash) {
          dbConn.query('UPDATE users SET password=? WHERE id = ?',
          [hash, res[0].id], async (err, response) => {
            if (err) {
              console.log('error: ', err);
              result(null, {error: 1})
            } else {
              const response = await sendEmail(
                'Password Reset', res[0].email, '',
                '<p>Your new password is: '+random+'</p>')
              result(null, {error: 0})
            }
          })
        });
      } else {
        result(null, {error: 1});
      }
    }
  });
};

// update a user
Auth.update = function (auth, id, image, result) {
  dbConn.query(`UPDATE users SET name = ?, phone = ?, description = ? WHERE id = ?`,
  [auth.name, auth.phone, auth.description, id],
  function (err, res) {
    if(err) {
      console.log('error: ', err);
      result(null, {error: 1});
    } else {
      if (image) {
        dbConn.query(`UPDATE users SET image = ? WHERE id = ?`, [image.filename, id],
        (err, res) => {
          if (err)
            result(null, {error: 1})
          else
            result(null, {error: 0})
        })
      } else {
        result(null, {error: 0})
      }
    }
  });
};


// repeat verification of a user
Auth.verifyAccountRepeat = function (auth, result) {
  dbConn.query("SELECT email FROM users WHERE id = ?",
  [auth.id], function (err, res) {
    if(err) {
      console.log('error: ', err);
      result(null, {error: 1});
    } else {
      sendEmail(
        'Verify your account', res[0].email, '',
        '<p>Thanks for joining us.</p>', `${url}verify-account/${auth.id}`, 'Verify your account')
      result(null, {error: 0})
    }
  });
};


// verify a user account
Auth.verifyAccount = function (auth, result) {
  dbConn.query('UPDATE users SET isVerified = 1 WHERE id = ?',
  [auth.id], (err, res) => {
    if (err)
      result(null, false)
    else
      result(null, true)
  })
}

// verify a user account
/*
Error 0 means no error
Error 1 means no Account
Error 2 means invalid Password
*/
Auth.login = function (auth, result) {
  dbConn.query('SELECT * FROM users WHERE (email = ? OR username = ?) AND status = 1 LIMIT 1', [auth.email, auth.email],
  (err, res) => {
    if (res.length != 0) {
      bcrypt.compare(auth.password, res[0].password, (err, hash) => {
        if (hash == true) {
          let id = res[0].id
          var token = ''
          if (auth.remember === 1) {
            token = jwt.sign({id}, jwtSecret, {expiresIn: 60 * 60 * 72})
          } else {
            token = jwt.sign({id}, jwtSecret, {expiresIn: 60 * 60 * 12})
          }
          delete res[0].id
          delete res[0].password
          result(null, {
            error: 0,
            token,
            user: res[0]
          })
        } else {
          result(null, {error: 2})
        }
      })
    } else {
      result(null, {error: 1})
    }
  })
}

module.exports= Auth;
