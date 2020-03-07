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

// Post - Inserts a Request into Worklist

function add_hl7_request(date, description, medical_act_id, episode_id, patient_id, request_id) {
    var message = new Builder.Message({
        messageType: 'ORM',     // Required. Demographics - ADT, Orders - ORM, Results - ORU, Charges - DFT
        messageEvent: 'OO1',    // Required. Admit a Patient - A01, Transfer - A02, Discharge - A03, Register - A04
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

    /*
    var evn = new Builder.Segment('EVN');
    // EVN
    
    evn.set(1,2); // event_type -> 1 <-> Episode_Creation, 2 <-> Request_Creation, 3 <-> Request_Change, 4 <-> Request Cancellation

    evn.set(2,episode_id); // episode_id -> Consulta
        
    evn.set(5,medical_act_id); // medical_act_id -> Anestesiologia, ...
    */

    var pid = new Builder.Segment('PID');
    // PID

    pid.set(1,patient_id); // patient_id

    var orc = new Builder.Segment('ORC');

    orc.set(1, 'NW'); // new exam

    orc.set(2, episode_id); // episode_id

    orc.set(5, medical_act_id); // medical_act_id

    var obr = new Builder.Segment('OBR');
    // OBR

    obr.set(1,request_id); // request_id

    obr.set(2, date); // date

    obr.set(3, description); // clinical_info

    obr.set(4, 0); // status

    obr.set(5, 1); // in_worklist

    message.add(pid);

    message.add(orc);

    // message.add(evn);

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
        client.destroy();
    });
    
    console.log("End");

    console.log("Message: " + message.toString());
}


router.post('/', (req, res, next) => {
    
    mysqlConf.getConnection(function (err, connection) {

        var sql = 'select * from episode where id = ?';

        var query = mysql.format(sql, [req.body.episode_id]);

        connection.query(query, (err, results) => {
            
            connection.release();
            
            if (err) {
                return res.status(400).send({
                    code: 400,
                    message: 'Bad Request - Error'
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
                    var patient_id = results[0].patient_id;
                    var values = [now.toISOString().slice(0, 19).replace('T', ' '), req.body.description, 0, 1, req.body.act_id, req.body.episode_id, patient_id];
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

                            add_hl7_request(now.toISOString().slice(0, 19).replace('T', ' '), req.body.description, req.body.act_id, req.body.episode_id, patient_id, results.insertId);

                            return res.status(200).send({
                                code : 200,
                                message : "Insertion was succesful",
                                inserted_id : results.insertId
                            });  
                        }
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

// Put - Updates a Request in the Worklist

function update_hl7_request(old_req, date, description, medical_act_id, episode_id, patient_id, request_id) {
    
    var message = new Builder.Message({
        messageType: 'ORM',     // Required. Demographics - ADT, Orders - ORM, Results - ORU, Charges - DFT
        messageEvent: '001',    // Required. Admit a Patient - A01, Transfer - A02, Discharge - A03, Register - A04
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

    /*
    var evn = new Builder.Segment('EVN');

    evn.set(1,3); // event_type -> 1 <-> Episode_Creation, 2 <-> Request_Creation, 3 <-> Request_Change, 4 <-> Request Cancellation

    evn.set(2,episode_id); // episode_id -> Consulta
        
    evn.set(5,medical_act_id); // medical_act_id -> Anestesiologia, ...
    */

    var pid = new Builder.Segment('PID');
    // PID

    pid.set(1,patient_id); // patient_id

    var orc = new Builder.Segment('ORC');

    orc.set(1, 'UP');

    orc.set(2, episode_id);

    orc.set(5, medical_act_id);

    var obr = new Builder.Segment('OBR');
    // OBR

    obr.set(1,request_id); // request_id

    obr.set(2, date); // date

    obr.set(3, description); // clinical_info

    obr.set(5,old_req); // old_request_id

    message.add(pid);

    message.add(orc);

    //message.add(evn);

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
        client.destroy();
    });
    
    console.log("End");


    console.log("Message: " + message.toString());

}

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

        var old_req = [req.body.req_id];

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
            
            else {

                update_hl7_request(old_req, now.toISOString().slice(0, 19).replace('T', ' '), req.body.description, req.body.act_id, req.body.episode_id, req.body.patient_id, results.insertId);

                return res.status(200).send({
                    code : 200,
                    message : "Insertion was succesful",
                    inserted_id : results.insertId
                }); 
            }
        })
    });
})

function delete_hl7_request(request_id) {
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

    evn.set(1,4); // event_type -> 1 <-> Episode_Creation, 2 <-> Request_Creation, 3 <-> Request_Change, 4 <-> Request Cancellation

    var obr = new Builder.Segment('OBR');
    // OBR

    obr.set(1,request_id); // request_id

    message.add(evn);

    message.add(obr);

    console.log("Message: " + message.toString());

}

router.delete('/', (req, res) => {
    mysqlConf.getConnection(function (err, connection) {
        var sql = "delete from worklist where id = ?";
        var query = mysql.format(sql, [req.query.req_id]);
        console.log("Delete: " + query);
        connection.query(query, (error, results) => {
            if (err) {
                return res.status(400).send({
                    code: 400,
                    message: 'Error'
                });
            }
            else {
                delete_hl7_request(req.query.req_id);
                return res.status(200).send({
                    code : 200,
                    message : "Cancellation was succesful"
                }); 
            }
        });

        connection.release();

    });
})

module.exports = router;