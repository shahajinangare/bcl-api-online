var db = require('../dbconnection'); //reference of dbconnection.js  
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
}
module.exports = Creditcard;  