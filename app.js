
var http = require('http');
var expressServer = require('./app/expressServer');

var PORT = 3000;

var server = http.createServer(expressServer.getServer());


server.listen(PORT, function() {
  console.log('Server running in ' + PORT);
});
