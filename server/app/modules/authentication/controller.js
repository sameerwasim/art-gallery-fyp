const Auth = require('./model')

var jwt = require('jsonwebtoken');
var jwtSecret = require('../../config/app.config').jwt;

exports.findAll = function(req, res) {
  data = req.query
  Auth.findAll(data, function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}

exports.findOne = function(req, res) {
  username = req.params.username
  Auth.findOne(username, function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}

exports.create = function(req, res) {
  const data = new Auth(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    Auth.register(data, function(err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

exports.resetPassword = function(req, res) {
  const data = new Auth(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    Auth.resetPassword(data, function(err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

exports.update = function(req, res) {
  const data = new Auth(req.body);
  const image = req.file ? req.file : ''
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    const token = req.headers['x-access-token']
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (decoded) {
        Auth.update(data, decoded.id, image, function(err, response) {
          if (err)
            res.send(err);
          res.json(response);
        });
      }
    })
  }
}

exports.verifyAccount = function(req, res) {
  const data = new Auth(req.params);
  Auth.verifyAccount(data, function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}

exports.verifyAccountRepeat = function(req, res) {
  const data = new Auth(req.params);
  Auth.verifyAccountRepeat(data, function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}

exports.login = function(req, res) {
  const data = new Auth(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    Auth.login(data, function(err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

exports.verifyToken = function(req, res) {
  const token = req.headers['x-access-token']
  jwt.verify(token, jwtSecret, function(err, decoded) {
    if (decoded)
      res.send(true)
    else {
      res.send(false)
    }
  });
};

exports.find = function(req, res) {
  const data = new Auth(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    Auth.find(data, function(err, response) {
      if (err)
        res.send(err);

      res.json({error: 0, user: response});
    });
  }
};
