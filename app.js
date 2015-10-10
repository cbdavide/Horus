
var http = require('http');
var expressServer = require('./app/expressServer');
var io = require('socket.io');

var PORT = 3000;

var server = http.createServer(expressServer.getServer());

var sio = io(server);


sio.on('connection', function(socket) {
  console.log('Usuario conectado!');

  socket.on('disconnect', function() {
    console.log('Usuario desconectado :x');
  })

});

server.listen(PORT, function() {
  console.log('Servidor corriedno en el puerto '+PORT);
});
