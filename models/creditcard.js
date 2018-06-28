var db = require('../dbconnection'); //reference of dbconnection.js  
var Admin =
{
    login: function(user,callback) {  
        
        return db.query("CALL proc_adm_login(?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc)",
        [
            user.emailid,
            user.password,
            user.latlong,
            user.macaddress,
            user.browser,
            user.os,
            user.source,
            user.createdby,
            user.createdip],callback);
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
module.exports = Admin;  