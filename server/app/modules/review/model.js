'use strict';
var dbConn = require('../../config/db.config')

var Review = function(review){
  this.id      = review.id;
  this.name      = review.name;
  this.rating      = review.rating;
  this.review      = review.review;
  this.status      = review.status;
  this.userId      = review.userId;
  this.artistId      = review.artistId;
  this.artworkId      = review.artworkId;
};

Review.create = function (review, result) {
  dbConn.query(`INSERT INTO reviews (artwork, user, name,
  rating, review ) VALUES (?,?,?,?,?)`, [review.artworkId, review.userId,
  review.name, review.rating, review.review],
  (err, res) => {
    if (err)
      result(null, err)
    else {
      result(null, {error: 0})
    }
  })
}

Review.findAllArtwork = function (artworkId, result) {
  dbConn.query(`SELECT avg(rating) as rating,
  (SELECT GROUP_CONCAT('{"name":"', reviews.name, '","rating":"', reviews.rating, '","createdAt":"', reviews.createdAt,
  '","review":"', reviews.review, '"}') FROM reviews WHERE reviews.artwork = ? AND status = 1) as reviews
  FROM reviews WHERE reviews.artwork = ? AND status = 1`, [artworkId, artworkId],
  (err, res) => {
    if (err)
      result(null, err)
    else {
      result(null, {error: 0, reviews: res[0]})
    }
  })
}

Review.findAllArtist = function (artistId, result) {
  dbConn.query(`SELECT * FROM reviews WHERE reviews.artwork IN (
    SELECT id FROM artworks WHERE artworks.artist = ?)`,
    [artistId],
  (err, res) => {
    if (err)
      result(null, err)
    else {
      result(null, {error: 0, reviews: res})
    }
  })
}

Review.findAllUser = function (userId, result) {
  dbConn.query(`SELECT * FROM reviews WHERE reviews.user = ?`,
    [userId],
  (err, res) => {
    if (err)
      result(null, err)
    else {
      result(null, {error: 0, reviews: res})
    }
  })
}


Review.findAll = function (limit, result) {

  limit = limit ? `limit ${parseInt(limit)}` : ''

  dbConn.query(`SELECT * FROM reviews WHERE status = 1 ORDER by createdAt DESC ${limit}`,
  (err, res) => {
    if (err)
      result(null, err)
    else {
      result(null, {error: 0, reviews: res})
    }
  })
}


Review.update = function (data, id, result) {

  dbConn.query(`UPDATE reviews SET rating = ?, review = ?  WHERE id = ?`,
  [data.rating, data.review, id],
  (err, res) => {
    if (err)
      result(null, err)
    else {
      result(null, {error: 0, reviews: res})
    }
  })
}

module.exports = Review;
