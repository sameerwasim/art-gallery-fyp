const express = require('express')
const router = express.Router()

const Auth = require('./controller');

const checkToken = require('../../middleware/middleware')

router
  .post('/create', Auth.create)
  .get('/verify/:id', Auth.verifyAccount)
  .post('/login', Auth.login)
  .get('/verify-token', Auth.verifyToken)
  .get('/user', checkToken, Auth.find)

module.exports = router
