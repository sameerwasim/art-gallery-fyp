'use strict';
var dbConn = require('../../config/db.config')
var serverURL = require('../../config/app.config').serverURL

var Artwork = function(artwork){
  this.id         = artwork.id;
  this.title      = artwork.title;
  this.size      = artwork.size;
  this.description      = artwork.description;
  this.price      = artwork.price;
  this.artist      = artwork.artist;
  this.category      = artwork.category;
};

Artwork.findAll = function (data, result) {

  const limit = data.limit ? `limit ${parseInt(data.limit)}` : ''
  const title = data.title ? `AND artworks.title LIKE "%${data.title}%"` : ''
  const artist = data.artist ? `AND artworks.artist = ${parseInt(data.artist)}` : ''
  const category = data.category ? `AND artworks.category = ${parseInt(data.category)}` : ''

  dbConn.query(`SELECT artworks.*, users.name, users.username,
     CONCAT('${serverURL}public/', artworkimages.image) as thumbnail
     FROM artworks JOIN users ON users.id = artworks.artist
     JOIN artworkimages ON artworkimages.artworkId = artworks.id
     WHERE artworks.status = 1 ${artist} ${title} ${category} GROUP BY artworks.id
     ORDER BY artworks.createdAt DESC ${limit}`, (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0, artworks: res})
  })
}

Artwork.findOne = function (id, result) {


  dbConn.query(`SELECT
  artworks.id, artworks.title, artworks.size, artworks.price, artworks.description, artworks.createdAt,
  users.id as userId, users.image, users.name, users.username, users.description,
  categories.category,
  (SELECT GROUP_CONCAT('{"image": "', image, '"}') FROM artworkimages WHERE artworkimages.artworkId = artworks.id) as images,
  (SELECT GROUP_CONCAT('{"id":"', artworks.id, '", "title": "', artworks.title,
    '", "name": "', users.name, '", "username": "', users.username, '", "thumbnail":"',
    CONCAT('${serverURL}public/', artworkimages.image), '"}')
    FROM artworks JOIN users ON users.id = artworks.artist
    JOIN artworkimages ON artworkimages.artworkId = artworks.id
    WHERE artist = artworks.artist AND artworks.status = 1 ORDER BY artworks.id DESC) as similars
  FROM artworks
  JOIN users ON users.id = artworks.artist
  JOIN categories ON categories.id = artworks.category
  WHERE artworks.id = ?`, [id], (err, res) => {
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
     WHERE artist = ? GROUP BY artworks.id ORDER BY artworks.createdAt DESC`, [id], (err, res) => {
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
        dbConn.query(`INSERT INTO artworkimages SET artworkId = ?, image = ?`,
        [res.insertId, images[i].filename])
      }
      result(null, {error: 0})
    }
  })
}

Artwork.edit = function (artwork, images, result) {
  dbConn.query(`UPDATE artworks SET category = ?, title = ?, size = ?,
  price = ?, description=? WHERE artworks.id = ?`, [artwork.category,
  artwork.title, artwork.size, artwork.price, artwork.description, artwork.id],
  (err, res) => {
    if (err)
      result(null, err)
    else {
      dbConn.query(`DELETE FROM artworkimages WHERE artworkimages.artworkId = ?`,
      [artwork.id], (err, res) => {
        for (var i = 0; i < images.length; i++) {
          dbConn.query(`INSERT INTO artworkimages SET artworkId = ?, image = ?`,
          [artwork.id, images[i].filename])
        }
        result(null, {error: 0})
      })
    }
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
