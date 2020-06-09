var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.gmail.com', // e.g. smtp.gmail.com
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('All works fine, congratz!');
    }
  });

const app = express()

app.use(express.json()); 
app.post('/send', (req, res, next) => {
const name = req.body.name
const email = req.body.email
const message = req.body.query


var mail = {
    from: name,
    to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  
    subject: 'Contact form request',

    html: message
}

transporter.sendMail(mail, (err, data) => {
    if (err) {
    res.json({
        msg: 'fail'
    })
    } else {
    res.json({
        msg: 'success'
    })
    }
})
})
  
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)