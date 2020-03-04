const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const Builder = require("hl7-builder");
const net = require('net');
const HOST = '35.214.78.49';
const PORT = 1234;

mysqlConf = require('../../db/db').mysql_pool;


// Get - Gets a Request from the Worklist

router.get('/', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        console.log("id: " + req.query.id);
        let sql = "select * from worklist where id = ?";
        var query = mysql.format(sql, [req.query.id]);
        connection.query(query, (err, result) => {
            if (err) console.error(err.message);
            res.send(result);
        })
        connection.release();
    });
});

// Post - Analyze exam from each Request



router.post('/', (req, res, next) => {
    
    mysqlConf.getConnection(function (err, connection) {

        var sql = 'select * from worklist where id = ?';

        var query = mysql.format(sql, [req.body.request_id]);

        connection.query(query, (err, results) => {
            
            connection.release();
            
            if (err) {
                return res.status(400).send({
                    code: 400,
                    message: 'Bad Request - Error'
                });
            }
            else {
                analyze_exam(request_id);
                return res.status(200).send({
                    code : 200,
                    message : "Analysis was succesful",
                });  
            }
        })
                res.status(400);
    });
});

module.exports = router;