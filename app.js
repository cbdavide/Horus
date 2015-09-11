
var express = require('express');
var http = require('http');

var app = express();

var PORT = 3000;

app.use('/', express.static(__dirname+'/public'));

app.get('/', function(req,res) {
  res.sendFile(__dirname+'/public/index.html');
});


var server = http.createServer(app);
server.listen(PORT, function() {
  console.log('Servidor corriedno en el puerto '+PORT);
});
