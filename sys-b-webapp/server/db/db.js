const mysql = require("mysql");

var config = {
    mysql_pool : mysql.createPool({
        user : "b3523516df4429",
        password : "e02c2080",
        host : "eu-cdbr-west-02.cleardb.net",
        database : "heroku_ea7a9f65887d529"
    })
};

module.exports = config;