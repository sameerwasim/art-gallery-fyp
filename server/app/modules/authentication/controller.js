const Auth = require('./model')

var jwt = require('jsonwebtoken');
var jwtSecret = require('../../config/app.config').jwt;

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

exports.verifyAccount = function(req, res) {
  const data = new Auth(req.params);
  Auth.verifyAccount(data, function(err, response) {
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
