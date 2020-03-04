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

function analyze_exam(request_id) {
    var message = new Builder.Message({
        messageType: 'ADT',     // Required. Demographics - ADT, Orders - ORM, Results - ORU, Charges - DFT
        messageEvent: 'A03',    // Required. Admit a Patient - A01, Transfer - A02, Discharge - A03, Register - A04
        eventSegment: true,
        delimiters: {
            segment: '\n'
            // field, component, repeat, escape, subComponent (unused)
        },
        sendingApplication: 'HL7-Receiver',
        sendingFacility: 'HL7-Receiver',
        receivingApplication: 'HL7-Sender',
        receivingFacility: 'HL7-Sender',
        messageId: Math.floor((Math.random() * 1000) + 1),
        version: '2.3'          // Default: 2.3
    });

    var evn = new Builder.Segment('EVN');
    // EVN
    
    evn.set(1,6); // event_type -> 1 <-> Episode_Creation, 2 <-> Request_Creation, 3 <-> Request_Change, 4 <-> Request Cancellation, 5 <-> ..., 6 <-> Analyze exam

    var obr = new Builder.Segment('OBR');
    // OBR

    obr.set(1,request_id); // request_id

    message.add(evn);

    message.add(obr);

    var client = new net.Socket();
    
    console.log("Created socket");
        
    client.connect(PORT, HOST, function() {
        console.log('CLIENT CONNECTED TO: ' + HOST + ':' + PORT);
        // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
        client.write(message.toString());
        console.log("Client wrote to server");
        client.destroy();
    });

    
    // Add a 'close' event handler for the client socket
    client.on('close', function() {
        console.log('Connection closed');
    });
    
    console.log("End");

    console.log("Message: " + message.toString());
}

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