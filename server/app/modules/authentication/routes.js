const express = require('express')
const router = express.Router()

const Auth = require('./controller');

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
var upload = multer({ storage: storage }).single('image')

router
  .post('/create', Auth.create)
  .get('/artists/', Auth.findAll)
  .get('/artist/:username', Auth.findOne)
  .get('/verify/:id', Auth.verifyAccount)
  .post('/verify/:id', Auth.verifyAccountRepeat)
  .post('/login', Auth.login)
  .get('/verify-token', Auth.verifyToken)
  .get('/user', checkToken, Auth.find)
  .put('/user', checkToken, upload, Auth.update)
  .post('/reset', Auth.resetPassword)

module.exports = router
