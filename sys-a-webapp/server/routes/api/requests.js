const express = require("express");
const router = express.Router();
const mysql = require("mysql");

mysqlConf = require('../../db/db').mysql_pool;


// Get

function getRequests (connection, req_id, req_number, res) {
    if (req_id == 1) {
        // Requirement 1 == CC
        sql = "select * from worklist where patient_id = ?";
    }

    else {
        // Requirement 2 == Request
        sql = "select * from worklist where id = ?";
    }

    var query = mysql.format(sql, [req_number]);

    console.log("query: " + query);

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(400).send({
                code: 400,
                message: 'Bad Request'
            });
        }

        else if (results) { // results is defined
            reply = [...results];
            if (req_id == 1) {
                // Requirement 1 == CC
                sql = "select * from archive where patient_id = ?";
            }
            else {
                // Requirement 2 == Request
                sql = "select * from archive where id = ?";
            }

            var query = mysql.format(sql, [req_number]);

            connection.query(query, (err, results) => {
                connection.release();
                if (err) {
                    return res.status(400).send({
                        code: 400,
                        message: 'Bad Request'
                    });
                }

                if (results) reply = reply.concat(results);

                if (reply.length > 0) {
                    return res.status(200).send({
                        code : 200,
                        results : reply
                    });
                }
                else {
                    return res.status(400).send({
                        code : 400,
                        results : []
                    });
                }
            })
        }
    })
}

router.get('/', (req, res) => {
    
    mysqlConf.getConnection(async function (err, connection) {
        
        if (req.query.req == 1) {
            // check if patient exists
            // and then get requests
            var sql = "select * from patient where id = ?";
            var query = mysql.format(sql, [req.query.req_number]);
            connection.query(query, (err, results) => {
                if (err) {
                    return res.status(401).send({
                        code: 401,
                        message: 'No user with that id'
                    });
                }
        
                else if (results) {
                    if (results.length < 1) {
                        return res.status(401).send({
                            code: 401,
                            message: 'No user with that id'
                        });
                    }

                    else getRequests(connection, req.query.req, req.query.req_number, res);

                }
            });
        }

        else getRequests(connection, req.query.req, req.query.req_number, res);
        
    });
});

// Post

router.post('/', (req, res, next) => {
    
    mysqlConf.getConnection(function (err, connection) {

        var sql = 'select * from episode where id = ?';

        var query = mysql.format(sql, [req.body.episode_id]);

        connection.query(query, (err, results) => {
            
            connection.release();
            
            if (err) {
                return res.status(400).send({
                    code: 400,
                    message: 'Bad Requesttt'
                });
            }

            if (results){ // results is defined
                
                if (!results.length) { // no episode with that id
                    return res.status(400).send({
                        code: 400,
                        message: 'No episode with that id'
                    });
                }

                else { // found episode
                    // requests table will have its name changed to worklist
                    // still need to increase clinical_info field's size to 300 chars
                    var sql = 'insert into worklist (date, clinical_info, status, in_worklist, medical_act_id, episode_id, patient_id) values (?,?,?,?,?,?,?)';
                    var now = new Date ();
                    var values = [now.toISOString().slice(0, 19).replace('T', ' '), req.body.description, 0, 1, req.body.act_id, req.body.episode_id, results[0].patient_id];
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
                    
                   res.status(400);
                }
            }
            else { // // results is undefined
                    return res.status(400).send({
                        code: 400,
                        message: 'Bad Requestt'
                    });
            }
        });
    
    });

})

module.exports = router;