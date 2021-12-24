const express = require('express')
const router = express.Router()

const Contact = require('./controller');
const checkToken = require('../../middleware/middleware')

router
  .post('/', Contact.create)
  .get('/', checkToken, Contact.findAll)

module.exports = router
