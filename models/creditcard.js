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
    
}
module.exports = Creditcard;  