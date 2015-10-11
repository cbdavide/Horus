
var http = require('http');
var expressServer = require('./app/expressServer');
var SocketIO = require('./app/SocketIO');

var PORT = 3000;

var server = http.createServer(expressServer.getServer());
var io = new SocketIO(server);


server.listen(PORT, function() {
  console.log('Servidor corriedno en el puerto '+PORT);
});
