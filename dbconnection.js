var mysql = require('mysql');  
var connection = mysql.createPool({  
    host     : 'dev-bcl-online.cekqufamdimo.ap-south-1.rds.amazonaws.com',
    user     : 'devbclonline',
    password : 'devbcl#nline#2018',
    database : 'dev_bcl_online',
    port     : '3306' 
});  
module.exports = connection;  