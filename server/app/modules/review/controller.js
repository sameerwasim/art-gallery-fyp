const Review = require('./model')

var jwt = require('jsonwebtoken');
var jwtSecret = require('../../config/app.config').jwt;

exports.create = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:1, message: 'Please provide all required field' });
  } else {
    const token = req.headers['x-access-token']
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (decoded) {
        req.body.userId = decoded.id ? decoded.id : 0
        const data = new Review(req.body);
        Review.create(data, function(err, response) {
          if (err)
            res.send(err);
          res.json(response);
        });
      } else {
        res.json({error: 1})
      }
    })
  }
}

exports.findAll = function(req, res) {

  const limit = req.query.limit
  Review.findAll(limit, function(err, response) {
    if (err)
    res.send(err);
    res.json(response);
  });
}

exports.findAllArtwork = function(req, res) {
  const id = parseInt(req.params.id)
  Review.findAllArtwork(id, function(err, response) {
    if (err)
    res.send(err);
    res.json(response);
  });
}

exports.findAllArtist = function(req, res) {
  const id = parseInt(req.params.id)
  Review.findAllArtist(id, function(err, response) {
    if (err)
    res.send(err);
    res.json(response);
  });
}

exports.findAllUser = function(req, res) {
  const id = parseInt(req.params.id)
  Review.findAllUser(id, function(err, response) {
    if (err)
    res.send(err);
    res.json(response);
  });
}

exports.update = function(req, res) {
  const data = req.body
  const id = parseInt(req.params.id)
  Review.update(data, id, function(err, response) {
    if (err)
    res.send(err);
    res.json(response);
  });
}
