const express = require("express");
const router = express.Router();
const Builder = require('hl7-builder');

var mysql = require('mysql');
mysqlConf = require('../../db/db').mysql_pool;


// GET

router.get('/', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from episode_type";
        connection.query(sql, (err, result) => {
            if (err) console.error(err.message);
            res.send(result);
        })
        connection.release();
    });
});

module.exports = router;