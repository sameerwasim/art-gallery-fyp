const Category = require('./model')

var jwt = require('jsonwebtoken');
var jwtSecret = require('../../config/app.config').jwt;

exports.findAll = function(req, res) {
  Category.findAll(function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}

exports.create = function(req, res) {
  const data = new Category(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    Category.create(data, function(err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

exports.edit = function(req, res) {
  const data = new Category(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    Category.edit(data, function(err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

exports.delete = function(req, res) {
  const id = parseInt(req.params.id)
  Category.delete(id, function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}
