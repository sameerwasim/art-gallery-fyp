function emailTemplete(body, link, linkText) {
  var email = `<div> ${body} <br/> <a href="${link}">${linkText}</a></div>`
  return email;
}

module.exports = emailTemplete;
