var jwt = require('jsonwebtoken')
var app = require('../config/app.config')
const jwtSecret = app.jwt

const checkToken = (req, res, next) => {
  const token = req.headers['x-access-token']
  jwt.verify(token, jwtSecret, function(err, decoded) {
    if (decoded) {
      req.body.id = decoded.id
      next();
    }
    else {
      res.send({error: 1, message: 'Please provide valid token'})
    }
  });
}


module.exports = checkToken;
