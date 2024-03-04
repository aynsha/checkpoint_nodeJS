var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com', 
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'youremail@gmail.com',
    subject: 'Envoyé un Email avec Node js',
    text: 'Bien reçu!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });