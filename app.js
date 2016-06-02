"use strict";
var http = require('http');
var expressServer = require('./app/expressServer');
var db = require('./db.js');

var PORT = 3000;

var server = http.createServer(expressServer.getServer());

db.connect()
    .then(() => {
        console.log('Connected to the database');
        server.listen(PORT, function() {
          console.log('Server running in ' + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
