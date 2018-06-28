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
    
}
module.exports = Creditcard;  