'use strict';
var dbConn = require('../../config/db.config')

var Contact = function(contact){
  this.id      = contact.id;
  this.name      = contact.name;
  this.email      = contact.email;
  this.message      = contact.message;
  this.phone      = contact.phone;
};

Contact.create = function (contact, result) {
  dbConn.query(`INSERT INTO contact (name, email, phone,
  message ) VALUES (?,?,?,?)`, [contact.name, contact.email,
  contact.phone, contact.message],
  (err, res) => {
    if (err)
      result(null, err)
    else {
      result(null, {error: 0})
    }
  })
}

Contact.findAll = function (result) {
  dbConn.query(`SELECT * FROM contact`,
  (err, res) => {
    if (err)
      result(null, err)
    else {
      result(null, {error: 0, contact: res})
    }
  })
}

module.exports = Contact;
