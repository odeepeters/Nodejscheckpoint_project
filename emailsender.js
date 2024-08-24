// // email-sender.js
// const nodemailer = require('nodemailer');

// // Create a transporter object using SMTP transport
// let transporter = nodemailer.createTransport({
//   service: 'gmail', // Use a suitable email service (e.g., 'gmail', 'yahoo')
//   auth: {
//     user: 'odeepeters@gmail.com', // Your email address
//     pass: 'Santino@1' // Your email password (or app-specific password if using Gmail) - Note: Password should be in quotes
//   }
// });

// // Setup email data
// let mailOptions = {
//   from: '"Sonny Peters" <odeepeters@gmail.com>', // Sender address - Note: Quotes added around name
//   to: 'odeepeters@gmail.com', // List of recipients
//   subject: 'Test Email from Node.js', // Subject line
//   text: 'Hello, this is a test email sent from a Node.js application!', // Plain text body
//   html: '<b>Hello, this is a test email sent from a Node.js application!</b>' // HTML body
// };

// // Send email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log('Error:', error);
//   }
//   console.log('Email sent: ' + info.response);
// });



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'odeepeters@gmail.com',
    pass: 'Santino@1'
  }
});

var mailOptions = {
  from: 'odeepeters@gmail.com',
  to: 'odeepeters@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
