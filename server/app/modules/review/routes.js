const express = require('express')
const router = express.Router()

const Review = require('./controller');
const checkToken = require('../../middleware/middleware')

router
  .post('/', Review.create)
  .get('/', Review.findAll)
  .get('/:id', Review.findAllArtwork)
  .get('/user/:id', checkToken, Review.findAllUser)
  .get('/artist/:id', Review.findAllArtist)
  .put('/:id', checkToken, Review.update)
  // .delete('/:id', checkToken, Review.delete)

module.exports = router
