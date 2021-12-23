'use strict';
var dbConn = require('../../config/db.config')
var serverURL = require('../../config/app.config').serverURL

var Artwork = function(artwork){
  this.title      = artwork.title;
  this.size      = artwork.size;
  this.description      = artwork.description;
  this.price      = artwork.price;
  this.artist      = artwork.artist;
  this.category      = artwork.category;
};

Artwork.findAll = function (data, result) {

  const limit = data.limit ? `limit ${parseInt(data.limit)}` : ''

  dbConn.query(`SELECT artworks.*, users.name, users.username,
     CONCAT('${serverURL}public/', artworkimages.image) as thumbnail
     FROM artworks JOIN users ON users.id = artworks.artist
     JOIN artworkimages ON artworkimages.artworkId = artworks.id
     WHERE status = 1 GROUP BY artworks.id ${limit}`, (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0, artworks: res})
  })
}

Artwork.findOne = function (id, result) {


  dbConn.query(`SELECT
  artworks.id, artworks.title, artworks.size, artworks.price, artworks.description, artworks.createdAt,
  users.id, users.image, users.name, users.username, users.description,
  categories.category,
  (SELECT GROUP_CONCAT('{"image": "', image, '"}') FROM artworkimages WHERE artworkimages.artworkId = artworks.id) as images
  FROM artworks
  JOIN users ON users.id = artworks.artist
  JOIN categories ON categories.id = artworks.category
  WHERE artworks.id = ?`, [id] (err, res) => {
    if (err)
      result(null, {error: 1})
    else
      result(null, {error: 0, artwork: res[0]})
  })
}

Artwork.findByArtistId = function (id, result) {
  dbConn.query(`SELECT artworks.*, users.name, users.username,
     CONCAT('${serverURL}public/', artworkimages.image) as thumbnail
     FROM artworks JOIN users ON users.id = artworks.artist
     JOIN artworkimages ON artworkimages.artworkId = artworks.id
     WHERE artist = ? GROUP BY artworks.id`, [id], (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0, artworks: res})
  })
}

Artwork.create = function (artwork, artist, images, result) {
  dbConn.query(`INSERT INTO artworks (artist, category, title, size,
  price, description) VALUES (?,?,?,?,?,?)`, [artist, artwork.category,
  artwork.title, artwork.size, artwork.price, artwork.description],
  (err, res) => {
    if (err)
      console.log(err);
      // result(null, err)
    else {
      for (var i = 0; i < images.length; i++) {
        dbConn.query(`INSERT INTO artworkImages SET artworkId = ?, image = ?`,
        [res.insertId, images[i].filename])
      }
      result(null, {error: 0})
    }
  })
}

Artwork.edit = function (artwork, result) {
  dbConn.query(`UPDATE categories set artwork = ? WHERE id = ?`, [artwork.artwork, artwork.id],
  (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0})
  })
}

Artwork.delete = function (id, result) {
  dbConn.query(`DELETE FROM categories WHERE id = ?`, [id],
  (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0})
  })
}

module.exports = Artwork;
