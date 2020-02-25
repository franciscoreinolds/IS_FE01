const express = require("express");
const router = express.Router();
const mysql = require("mysql");

mysqlConf = require('../../db/db').mysql_pool;


// Get - Gets Requests based on Patient_ID / Request_ID

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
                    return res.status(201).send({
                        code : 201,
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

module.exports = router;