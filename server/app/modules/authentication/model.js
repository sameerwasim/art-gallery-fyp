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
};

Auth.find = function (auth, result) {
  dbConn.query(`SELECT image, name, username, email, isVerified FROM users WHERE id = ?`, [auth.id], (err, res) => {
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
