const { createPool }=require("mysql");
const pool=createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password:"steaua866",
    database: "mydb",
    connectionLimit: 10
});

module.exports= pool;







/*var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'steaua866'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});*/