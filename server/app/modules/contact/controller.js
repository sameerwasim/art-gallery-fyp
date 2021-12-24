const Contact = require('./model')

var jwt = require('jsonwebtoken');
var jwtSecret = require('../../config/app.config').jwt;

exports.create = function(req, res) {
  data = new Contact(req.body)
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    Contact.create(data, function(err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

exports.findAll = function(req, res) {
  Contact.findAll(function(err, response) {
    if (err)
    res.send(err);
    res.json(response);
  });
}
