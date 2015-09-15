
var express = require('express');
var path = require('path');
var routers = require('./routers');


var expressServer = (function() {

  var server = express();

  server.use('/', express.static(path.join(__dirname, '../public')));
  console.log(__dirname);

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
