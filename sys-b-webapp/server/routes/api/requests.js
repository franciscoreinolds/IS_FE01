const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const Builder = require("hl7-builder");
const net = require('net');
const HOST = '35.214.87.121';
const PORT = 1235;

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

router.put('/', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        let sql = "update worklist set status = 1 where id = ?";
        var query = mysql.format(sql, [req.body.req_id]);
        console.log(query)
        connection.query(query, (err, result) => {
            if (err) {
                return res.status(400).send({
                    code: 400,
                    message: 'Bad Update'
                });
            }
            else {
                analyze_exam(req.body.req_id);
                return res.status(200).send({
                    code : 200,
                    message : "Update was succesful"
                }); 
            }      
        })
        connection.release();
    });
})

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
    
    console.log("before socket");

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


function send_report(info, report) {

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
    evn.set(2,info.episode_id);

    evn.set(5,info.medical_act_id);
    
    evn.set(1,7); // event_type -> 1 <-> Episode_Creation, 2 <-> Request_Creation, 3 <-> Request_Change, 4 <-> Request Cancellation, 5 <-> ..., 6 <-> Analyze exam, 7 <->  Write report

    var obr = new Builder.Segment('OBR');
    // OBR

    obr.set(1,info.id); // request_id

    obr.set(2,info.date);

    obr.set(3,info.clinical_info);

    obr.set(7,report); // report

    var pid = new Builder.Segment('PID');

    pid.set(1,info.patient_id);

    message.add(pid);

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

router.post('/', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from worklist where id = ?";
        var query = mysql.format(sql, [req.body.new_id]);
        console.log(query)
        connection.query(query, (err, result) => {
            if (err) {
                return res.statuaas(400).send({
                    code: 400,
                    message: 'Bad Select'
                });
            }
            else {
                if (!result.length) {
                    // length = 0
                    return res.status(401).send({
                        code: 401,
                        message: 'Empty'
                    });
                }
                else {
                    sql = "delete from worklist where id = ?"
                    query = mysql.format(sql, [req.body.new_id]);
                    connection.query(query, (err, results) => {
                        connection.release();
                        if (err) {
                            return res.status(400).send({
                                code: 400,
                                message: 'Bad Select'
                            });
                        }
                        else {
                            send_report(result[0],req.body.report);
                            return res.status(200).send({
                                code: 200,
                                message: 'Noice'
                            });
                        }
                    })
                }
            }      
        })    

    });
})

module.exports = router;