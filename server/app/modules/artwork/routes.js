const express = require('express')
const router = express.Router()

const Artwork = require('./controller');
const checkToken = require('../../middleware/middleware')

var multer = require('multer')
var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})
var upload = multer({ storage: storage }).array('images')

router
  .post('/', checkToken, upload, Artwork.create)
  .get('/', Artwork.findAll)
  .get('/:id', Artwork.findOne)
  .get('/artist/:id', Artwork.findByArtistId)
  .put('/', checkToken, upload, Artwork.edit)
  .delete('/:id', checkToken, Artwork.delete)

module.exports = router
