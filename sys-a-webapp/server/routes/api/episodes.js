const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const Builder = require('hl7-builder');
const net = require('net');
var HOST = '35.214.78.49';
var PORT = 1234;



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

// Post - Add episode

function add_hl7_episode(episode_id, pat_id, doc_id, type_id) {
  
    var message = new Builder.Message({
        messageType: 'ADT',     // Required. Demographics - ADT, Orders - ORM, Results - ORU, Charges - DFT
        messageEvent: 'A03',    // Required. Admit a Patient - A01, Transfer - A02, Discharge - A03, Register - A04
        eventSegment: true,
        delimiters: {
            segment: '\n'
            // field, component, repeat, escape, subComponent (unused)
        },
        sendingApplication: 'HL7-Sender',
        sendingFacility: 'HL7-Sender',
        receivingApplication: 'HL7-Receiver',
        receivingFacility: 'HL7-Receiver',
        messageId: Math.floor((Math.random() * 1000) + 1),
        version: '2.3'          // Default: 2.3
    });

    
    var evn = new Builder.Segment('EVN');
    // EVN    
    evn.set(1,1); // event_type -> 1 <-> Episode_Creation, 2 <-> Request_Creation, 3 <-> Request_Change, 4 <-> Request Cancellation

    evn.set(2,episode_id); // episode_id

    evn.set(3,type_id); // episode_type -> Consulta
        
    evn.set(4,doc_id); // doctor_id

    var orc = new Builder.Segment('ORC');

    orc.set(1, 'NE');
    
    var pid = new Builder.Segment('PID');
    // PID. 0 - CC
    
    pid.set(1, pat_id);

    message.add(evn);

    message.add(orc);

    message.add(pid);

    var client = new net.Socket();
        
    client.connect(PORT, HOST, function() {
        // When the client connects to the HOST:PORT TCP it executes the content of this function
        console.log('CLIENT CONNECTED TO: ' + HOST + ':' + PORT);
        // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
        client.write(message.toString());
        console.log(`Client wrote: ${message.toString()} to server`);
        client.destroy();
    });
    
    
    // Add a 'close' event handler for the client socket
    client.on('close', function() {
        // when the server sends a 'event' the client executes this function
        console.log('Connection closed');
        client.destroy();
    });
    
}

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

                        else {

                            add_hl7_episode(results.insertId, req.body.pat_id, req.body.doc_id, req.body.type_id);

                            return res.status(200).send({
                                code : 200,
                                message : "Insertion was succesful",
                                inserted_id : results.insertId
                            });
                        }
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