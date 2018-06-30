var express = require('express');  
var router = express.Router();  
var Creditcard = require('../models/creditcard'); 
var logger = require('../logger').Logger;
var nodemailer = require('nodemailer');
var Common = require('../models/common');
//var welcomeemail = require('../public/htmls/welcomeemail.htm');
//var http = require('http');

var code;
var message;

router.post('/getoffers', function(req, res, next) {  
    Creditcard.getoffers(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else {          
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

router.post('/createapplication', function(req, res, next) {  
    Creditcard.createapplication(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else {          
           var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
           
            switch(Code)
                {
                    case 200:
                        res.status(200).send({
                            code:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode,
                            message:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errdesc, 
                            outid:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].outid, 
                            result:rows[0]
                        })
                        break;
                        default:
                    res.status(200).send({
                        code: JSON.parse(JSON.stringify(rows[0]))[0].o_errcode,
                        message: JSON.parse(JSON.stringify(rows[0]))[0].o_errdesc, 
                        outid:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].outid, 
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


router.post('/createcustomerprofile', function(req, res, next) {  
    Creditcard.createcustomerprofile(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else {          
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


router.post('/getcustomerinfo', function(req, res, next) {  
    Creditcard.getcustomerinfo(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else {    
               
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
                        case -100:
                        
                        res.status(200).send({
                            code:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode,
                            message:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errdesc, 
                            result:""
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


router.post('/updateapplication', function(req, res, next) {  
    Creditcard.updateapplication(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else {          
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
router.post('/customerregistration', function(req, res, next) {  
    Creditcard.customerregistration(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else {          
           var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
           
            switch(Code)
                {
                    case 200:
                    console.log('call sms : ');
                        Creditcard.getsms(req.body,function(err,resp) {  
                            console.log('error : ' + err);
                            console.log('resp1 : ' + resp);
                            
                            if (err) 
                            {  
                                logger.error(err); 
                                res.json(err); 
                            } else { 
                                var smsCode = resp.split("&")[1].split("=")[1];
                                console.log('call sms : ' + smsCode);
                            }
                        }); 
                        console.log('end sms : ');
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
router.post('/customerverification', function(req, res, next) {  
    Creditcard.customerverification(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else {          

            
            
           // console.log(rows);
           var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
           console.log(Code);
            switch(Code)
                {
                    case 200:
                        
                        req.body.toemailid= req.body.emailid;
                        req.body.ccemailid='';
                        req.body.subject='test mail';
                        req.body.message='';
                        req.body.messagehtml=welcomeemail;
            
                    // console.log(req.body);
                        Common.sendemail(req.body, function(err,rows)
                        {
                            //console.log('send ammm');
                            
                        }); 
                        console.log('send email');
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

router.post('/getsms', function(req, res, next) {  
    Creditcard.getsms(req.body,function(err,resp) {  
        console.log('error : ' + err);
        console.log('resp1 : ' + resp);
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else { 
           
            var Code = resp.split("&")[1].split("=")[1];
            console.log(Code);
            switch(Code)
            {
                case '0':
                res.status(200).send({
                    code:200,
                    message:'Success', 
                    result:''
                })
                break;
                default:
            res.status(200).send({
                code: Code,
                message: "Error in process", 
                result:""
            });

           }
         }
    }
    catch({error})
    {
        logger.error(resp);
    }  
    }); 
    
    
});

router.get('/getqualification', function(req, res, next) {  
    Creditcard.getqualification(req.body,function(err,rows) {  
      
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else { 
           
            var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
            console.log(Code);
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
        logger.error(resp);
    }  
}); 
    
    
});

module.exports = router; 
