const express = require("express");
const router = express.Router();
var mysql = require('mysql');

mysqlConf = require('../../db/db').mysql_pool;


// Get

router.get('/', (req, res) => {
    mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from episode";
        connection.query(sql, (err, result) => {
            if (err) console.error(err.message);
            res.send(result)
        })
        connection.release();
    });
});

router.post('/', (req, res, next) => {
    
    mysqlConf.getConnection(function (err, connection) {

        var sql = 'select * from patient where id = ?';

        var query = mysql.format(sql, [req.body.pat_id]);

        console.log("query: " + query);

        connection.query(query, (err, results) => {
            
            connection.release();
            
            if (err) {
                return res.status(400).send({
                    code: 400,
                    message: 'Bad Request'
                });
            }

            if (results){ // results is defined
                
                if (!results.length) { // no user with that username
                    return res.status(400).send({
                        code: 400,
                        message: 'No user with that id'
                    });
                }

                else { // found user
                    var sql = 'insert into episode (patient_id, doctor_id, type_id) values (?,?,?)';
                    var values = [req.body.pat_id, req.body.doc_id, req.body.type_id];
                    var query = mysql.format(sql, values);

                    // variable setup

                    connection.query(query, (err, results) => {
                        if (err) {
                            return res.status(400).send({
                                code: 400,
                                message: 'Bad Request'
                            });
                        }
                        return res.status(200).send({
                            code : 200,
                            message : "Insertion was succesful",
                            inserted_id : results.insertId
                        });  
                    })    
                }
            }
            else { // // results is undefined
                    return res.status(400).send({
                        code: 400,
                        message: 'Bad Request'
                    });
            }
        });
    
    });

})

module.exports = router;