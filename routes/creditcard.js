var express = require('express');  
var router = express.Router();  
var Admin = require('../models/Admin'); 
var logger = require('../logger').Logger;
var nodemailer = require('nodemailer');

//var nodemailer = require('nodemailer');
var code;
var message;

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'npnileshpatil1986@gmail.com',
//       pass: 'pranil@902862'
//     }
//   });
  
//   var mailOptions = {
//     from: 'npnileshpatil1986@gmail.com',
//     to: 'npnileshpatil1986@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   })

router.post('/login', function(req, res, next) {  
    Admin.login(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else { 
           //console.log(req.body);
           //console.log(rows);
           //addedd  pravin added
           var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
           
            switch(Code)
                {
                    case 200:
                        res.status(200).send({
                            code:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode,
                            message:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errdesc, 
                            result:rows[0]
                        })
                        break;
                        default:
                    res.status(200).send({
                        code: JSON.parse(JSON.stringify(rows[0]))[0].o_errcode,
                        message: JSON.parse(JSON.stringify(rows[0]))[0].o_errdesc, 
                        result:""
                    });
                        
        

                }
        }
    }
    catch({error})
    {
        logger.error(error);
    }  
    });  
});

module.exports = router; 
