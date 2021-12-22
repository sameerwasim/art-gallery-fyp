'use strict';
var dbConn = require('../../config/db.config')

var Category = function(category){
  this.id      = category.id;
  this.category      = category.category;
};

Category.findAll = function (category, result) {
  dbConn.query(`SELECT * FROM category`, (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0, categories: res})
  })
}

Category.create = function (category, result) {
  dbConn.query(`INSERT INTO categories (category) VALUES (?)`, [category.category], (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0})
  })
}

Category.edit = function (category, result) {
  dbConn.query(`UPDATE categories set category = ? WHERE id = ?`, [category.category, category.id],
  (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0})
  })
}

Category.delete = function (id, result) {
  dbConn.query(`DELETE FROM categories WHERE id = ?`, [id],
  (err, res) => {
    if (err)
      result(null, err)
    else
      result(null, {error: 0})
  })
}

module.exports = Category;
