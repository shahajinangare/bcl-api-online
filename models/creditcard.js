var db = require('../dbconnection'); //reference of dbconnection.js  
var requestify = require('requestify');
var Creditcard =
{
   
    createapplication: function(application,callback) {  
        
        return db.query("CALL proc_cc_createapplication(?,?,?,?,?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc)",
        [
            application.customerid,
            application.bankid,
            application.statusid,
            application.offerid,
            application.income,
            application.pincode,
            application.latlong,
            application.macaddress,
            application.browser,
            application.os,
            application.source,
            application.createdby,
            application.createdip], callback);
    },
    getoffers: function(customer,callback) {  
        
        return db.query("CALL proc_cc_getoffers(?,?,?,@o_errcode,@o_errdesc)",
        [
            customer.customerid,
            customer.pincode,
            customer.income,
         ],callback);
    }, 

    updateapplication: function(updapplication,callback) {  
        
        return db.query("CALL proc_cc_updateapplication(?,?,?,?,?,@o_errcode,@o_errdesc)",
        [
            updapplication.applicationid,
            updapplication.customerid,
            updapplication.statusid,
            updapplication.modifiedby,
            updapplication.modifiedip], callback);
    },

    getcustomerinfo: function(getcustomer,callback) {  
        
        return db.query("CALL proc_cc_getcustomerdetails(?,?,@o_errcode,@o_errdesc)",
        [
            getcustomer.customerid,
            getcustomer.mobileno], callback);
    },
    
    createcustomerprofile: function(customer,callback) {  
        
        return db.query("CALL proc_cc_createcustomerprofile(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc)",
        [
            customer.customerid,
            customer.companyname,
            customer.compnayid,
            customer.qualificationid ,
            customer.residenceaddress1,
            customer.residenceaddress2,
            customer.residenceaddress3,
            customer.resicity,
            customer.resipin ,
            customer.resiphone  ,
            customer.resistate,
            customer.resistdcode,
            customer.occupationtype,
            customer.designation,	
            customer.natureofbusiness,
            customer.officeaddress1,
            customer.officeaddress2,
            customer.officeaddress3,
            customer.officephone  ,
            customer.officestdcode  ,
            customer.officepin  ,
            customer.officestate,
            customer.officecity,
            customer.yearsofcurrentemployment,
            customer.fathersname,
            customer.mothersmaidenname,
            customer.resilandmark,
            customer.officelandmark,
            customer.createdby,
            customer.createdip         
         ],callback);
    }, 
    customerregistration: function(customer,callback) {  
        
        return db.query("CALL proc_cc_registration(?,?,?,?,?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc)",
        [
            customer.name,
            customer.emailid,
            customer.mobileno,
            customer.pincode ,
            customer.income,
            customer.otp,
            customer.latlong,
            customer.macaddress,
            customer.browser ,
            customer.os  ,
            customer.source  ,
            customer.createdby,
            customer.createdip       
         ],callback);
    }, 
    customerverification: function(customer,callback) {  
        
        return db.query("CALL proc_cc_verification(?,?,?,?,?,?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc)",
        [
            customer.customerid,
            customer.name,
            customer.emailid,
            customer.mobileno,
            customer.pincode ,
            customer.income,
            customer.otp,
            customer.latlong,
            customer.macaddress,
            customer.browser ,
            customer.os  ,
            customer.source  ,
            customer.createdby,
            customer.createdip       
         ],callback);
    }, 

    
    getsms: function(sms,callback) {  
        console.log('resp inner : ' + sms.mobilenumber);
        var smsurl ='http://myvaluefirst.com/smpp/sendsms?username=bajajcapital1&password=bajaj123&to='+sms.mobilenumber+'&from=BAJAJA&udh=0&text=%20Your%20transaction%20request%20with%20ref.%20no.%20125258%20is%20received%20from%20login%20ID%20SHIBRAJ%20on%20Jun%2021%202016%202:33PM%20hrs.%20For%20queries,%20Please%20call%20+919582999706&dlr-mask=19&dlr-url&category=bulk';
      
        
        requestify.request(smsurl, {
            method: 'GET'
                    
        })
        .then(function(response) {
                response.getBody();
                response.getHeaders();
                response.getHeader('Accept');
                response.getCode();
                console.log('resp inner : ' + response.body);
                return callback('',response.body);

        });
        
    },

    getqualification: function(customer,callback) {  
        
        return db.query("CALL proc_cc_getqualification(@o_errcode,@o_errdesc)",
        [],callback);
    },
}
module.exports = Creditcard;  