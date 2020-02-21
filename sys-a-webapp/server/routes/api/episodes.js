const express = require("express");
const router = express.Router();
var mysql = require('mysql');

mysqlConf = require('../../db/db').mysql_pool;


// Get

router.get('/', (req, res) => {
    const connection = mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from episode";
        connection.query(sql, (err, result) => {
            if (err) console.error(err.message);
            res.send(result)
        })
        connection.release();
    });
});

router.post('/', (req, res) => {
    const connection = mysqlConf.getConnection(function (err, connection) {

        toInsert = [req.body.patient_id, req.body.doctor_id, req.body.type_id];
        
        let sql = `insert into episode (patient_id, doctor_id, type_id) values (?,?,?)`;

        let query = mysql.format(sql, toInsert);

        if (err) console.log("Error: " + err.message);
        connection.query(query, (err, results, fields) =>{
            if (err) return console.error(err.message);
            res.send('Episode added!');
        })
        connection.release();
    });
})

module.exports = router;