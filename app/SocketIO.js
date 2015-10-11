
var socketio = require('socket.io');

var SocketIO = function(server) {

  var io = socketio.listen(server);

  io.on('connection', function(socket) {

    socket.on('calendarConnection', function(calendarID) {
      socket.join(calendarID.toString());
    })

    socket.on('calendarDisconnection', function(calendarID) {
      socket.leave(calendarID.toString());
    })

    socket.on('voto', function(data) {
      socket.broadcast.to(data.calendarID.toString()).emit('grabarVoto', data.bloqueID);
    });

  });
}

module.exports = SocketIO;
