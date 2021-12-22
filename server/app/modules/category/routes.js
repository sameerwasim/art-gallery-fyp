const express = require('express')
const router = express.Router()

const Category = require('./controller');

const checkToken = require('../../middleware/middleware')

router
  .post('/', checkToken, Category.create)
  .get('/', Category.findAll)
  .put('/', checkToken, Category.edit)
  .delete('/:id', checkToken Category.delete)

module.exports = router
