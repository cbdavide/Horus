
var express = require('express');
var bodyParser = require('body-parser');
var routers = require('./routers');


var expressServer = (function() {

  var server = express();

  server.use('/', express.static(__dirname + '/public'));
  server.use(bodyParser.urlencoded({extended: true}));
  server.use(bodyParser.json());

  server.set('view engine', 'ejs');
  server.set('views', './app/view');

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
