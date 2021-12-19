const express = require('express')
const router = express.Router()

const Auth = require('./controller');

router
  .post('/create', Auth.create)
  .get('/verify/:id', Auth.verifyAccount)
  .post('/login', Auth.login)
  .get('/verify-token', Auth.verifyToken)

module.exports = router
