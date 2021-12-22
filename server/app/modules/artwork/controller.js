const Artwork = require('./model')

var jwt = require('jsonwebtoken');
var jwtSecret = require('../../config/app.config').jwt;

exports.findAll = function(req, res) {
  Artwork.findAll(function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}

exports.findByArtistId = function(req, res) {
  const id = parseInt(req.params.id)
  Artwork.findByArtistId(id, function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}

exports.create = function(req, res) {
  const data = new Artwork(req.body);
  const images = req.files
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    const token = req.headers['x-access-token']
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (decoded) {
        Artwork.create(data, decoded.id, images, function(err, response) {
          if (err)
            res.send(err);
          res.json(response);
        });
      }
    })
  }
}

exports.edit = function(req, res) {
  const data = new Artwork(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    Artwork.edit(data, function(err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  }
}

exports.delete = function(req, res) {
  const id = parseInt(req.params.id)
  Artwork.delete(id, function(err, response) {
    if (err)
      res.send(err);
    res.json(response);
  });
}
