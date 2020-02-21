const mysql = require("mysql");

var config = {
    mysql_pool : mysql.createPool({
        host : "eu-cdbr-west-02.cleardb.net",
        user : "ba8419e605ce8f",
        password : "6e5844da",
        database : "heroku_6e0e3a2658f3533"
    })
};

module.exports = config;