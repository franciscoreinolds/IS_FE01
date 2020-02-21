const express = require("express");
const router = express.Router();

mysqlConf = require('../../db/db').mysql_pool;


// Get

router.get('/', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from doctor";
        connection.query(sql, (err, result) => {
            if (err) console.error(err.message);
            res.send(result);
        })
        connection.release();
    });
});

module.exports = router;