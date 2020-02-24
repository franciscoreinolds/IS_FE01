const express = require("express");
const router = express.Router();
const Builder = require('hl7-builder');

var mysql = require('mysql');
mysqlConf = require('../../db/db').mysql_pool;


// GET

router.get('/', (req, res) => {
    const db = mysqlConf.getConnection(function (err, connection) {
        let sql = "select * from episode_type";
        connection.query(sql, (err, result) => {
            if (err) console.error(err.message);
            res.send(result);
        })
        connection.release();
    });
});

// POST

/*
    var message = new Builder.Message({
        messageType: 'ADT',     // Required
        messageEvent: 'A03',    // Required
        eventSegment: true,
        delimiters: {
            segment: '\n'
            // field, component, repeat, escape, subComponent (unused)
        },
        sendingApplication: 'Builder',
        sendingFacility: 'UnitA',
        receivingApplication: 'Consumer',
        receivingFacility: 'UnitB',
        messageId: Math.floor((Math.random() * 1000) + 1),
        version: '2.3'          // Default: 2.3
    });
    
    var pid = new Builder.Segment('PID');
    
    // Add fields with a single component
    pid.set(3, '234234');
    pid.set(18, '55555');
    
    // Add field with multiple components
    var address = new Builder.Field();
    address.set(0, '0000 main street');
    address.set(2, 'Last Vegas');
    address.set(3, 'NV');
    address.set(4, '12345');
    
    // Add a repeat inside a field
    address.repeat();
    address.set(0, '1111 alternate street');
    address.set(2, 'Last Vegas');
    address.set(3, 'NV');
    address.set(4, '12345');
    
    pid.set(11, address);
    
    var pv1 = new Builder.Segment('PV1');
    pv1.set(1, 'Testable');
    
    message.add(pid);
    message.add(pv1);
    
    // Getters
    console.log(address.get(0));        // 1111 alternative street
    console.log(address.get(0, 0));     // 1234 main street
    console.log(pid.get(3));            // 234234
    
    // toStrings
    console.log(address.toString());    // 0000 main street^Last Vegas^NV^12345~1111 alternate street^Last Vegas^NV^12345
    console.log(pv1.toString());        // PV1|Testable
    console.log(message.toString());    // MSH|.....
    
    // Create an L7 query object
    var parsedMessage = message.toQuery();
    console.log(parsedMessage.query('PID|3'));
    */

module.exports = router;