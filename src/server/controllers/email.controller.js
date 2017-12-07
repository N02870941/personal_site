var nodemailer = require('nodemailer');
var config     = require('../config/config.json');

module.exports = function(server) {
  server.post('/contact', function (req, res) {
    var mailOpts, smtpTrans;

    try {

      // Setup Nodemailer transport
      smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: config.email.from
      });

    } catch (err) {
      console.log(err);
    }

    // Mail options
    mailOpts = {
      from: config.email.from.user,
      to: config.email.to.user,
      subject: req.body.subject,
      html: `<p>You recieved a message:</p>` +
        `<p><strong>from: </strong>` + req.body.email + "</p>" +
        `<p><strong>name: </strong>` + req.body.name + "</p>" +
        `<p><strong>subject: </strong>` + req.body.subject + "</p>" +
        `<p><strong>message: </strong>` + req.body.message + "</p>"
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {

      // Email not sent
      if (error) {
        res.status(500);
        res.send({
          msg: 'Error occured, message not sent.'
        })
      }

      // Email sent
      else {
        res.status(200);
        res.send({
          msg: 'Message sent! Thank you.'
        })
      }
    });
  });
}
