const express = require("express");
const router = express.Router();

mysqlConf = require('../../db/db').mysql_pool;


// Get

router.get('/', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from worklist";
        connection.query(sql, (err, result) => {
            if (err) console.error(err.message);
            res.send(result)
        })
        connection.release();
    });
});

router.get('/report', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from worklist where in_worklist = 1 and status = 1";
        connection.query(sql, (err, result) => {
            if (err) console.error(err.message);
            res.send(result)
        })
        connection.release();
    });
});

router.get('/exam', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from worklist where in_worklist = 1 and status = 0";
        connection.query(sql, (err, result) => {
            if (err) console.error(err.message);
            res.send(result)
        })
        connection.release();
    });
});

module.exports = router;