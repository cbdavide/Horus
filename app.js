
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
  });

  socket.on('calendarConnection', function(calendarID) {
    socket.join(calendarID.toString());
    console.log('Conectado a ' + calendarID);
  })

  socket.on('calendarDisconnection', function(calendarID) {
    socket.leave(calendarID.toString());
    console.log('Desconectado de ' + calendarID);
  })

  socket.on('voto', function(data) {
    console.log('Se ha registrado un voto para ' + data.bloqueID);
    socket.broadcast.to(data.calendarID.toString()).emit('grabarVoto', data.bloqueID);
  });

});

server.listen(PORT, function() {
  console.log('Servidor corriedno en el puerto '+PORT);
});
