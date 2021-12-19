const nodemailer = require('nodemailer');
const emailConfig = require('../config/mail.config')
const templete = require('./templete.js');

function sendEmail(subject, email, bcc, text, link='', linkText='') {

  text = templete(text, link, linkText);

  var transporter = nodemailer.createTransport(emailConfig);

  var mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    bcc: bcc,
    subject: subject,
    html: text,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    }
  });
}

module.exports = sendEmail;
