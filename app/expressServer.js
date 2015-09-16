
var express = require('express');
var routers = require('./routers');


var expressServer = (function() {

  var server = express();

  server.use('/', express.static(__dirname + '/public'));

  server.set('views','./app/views');
  server.set('view engine', 'ejs');

  for(var i in routers) {

    var router = routers[i];
    server[router.method](router.path, router.callback);

  }

  return {
    getServer: function() {
      return server;
    }
  }

})();

module.exports =  expressServer;
