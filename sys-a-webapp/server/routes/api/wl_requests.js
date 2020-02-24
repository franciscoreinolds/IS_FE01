const express = require("express");
const router = express.Router();
const mysql = require("mysql");

mysqlConf = require('../../db/db').mysql_pool;


// Get

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

// Put - Update Worklist Request

router.put('/', (req, res) => {
    mysqlConf.getConnection(function (err, connection) {
        var sql = "delete from worklist where id = ?";
        var query = mysql.format(sql, [req.body.req_id]);
        connection.query(query, (error, results) => {
            if (err) {
                return res.status(400).send({
                    code: 400,
                    message: 'Error'
                });
            }
        });

        sql = "insert into worklist (date, clinical_info, status, in_worklist, medical_act_id, episode_id, patient_id) values (?,?,?,?,?,?,?)";
        var now = new Date;
        console.log("desc: " + req.body.description);
        query = mysql.format(sql, [now.toISOString().slice(0, 19).replace('T', ' '), req.body.description, 0, 1, req.body.act_id, req.body.episode_id, req.body.patient_id]);
        connection.query(query, (error, results) => {
            connection.release();
            if (err) {
                return res.status(400).send({
                    code: 400,
                    message: 'Bad Insert'
                });
            }
            return res.status(200).send({
                code : 200,
                message : "Insertion was succesful",
                inserted_id : results.insertId
            });  
        })
    });
})

module.exports = router;