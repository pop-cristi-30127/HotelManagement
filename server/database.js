const { createPool }=require("mysql");
const pool=createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password:"12345",
    database: "mydb",
    connectionLimit: 10
});

module.exports= pool;







