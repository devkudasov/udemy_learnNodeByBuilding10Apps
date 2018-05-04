const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', function (req, res, next) {
  res.render('contacts', {title: 'Contacts'});
});

router.post('/send', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '<YOUR FULL USERNAME>',
      pass: '<YOUR PASSWORD>'
    }
  });

  const options = {
    from: 'Dima Kudasov <kudasov.dima@gmail.com>',
    to: req.body.email,
    subject: req.body.name,
    text: req.body.message,
    html: '<h1>You got a new submission with the following details...</h1><ul><li>Name: ' + req.body.name +
    '</li><li>Email: ' + req.body.email +
    '</li><li>Message: ' + req.body.message + '</li></ul>'
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      console.log('Message Sent: ' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;