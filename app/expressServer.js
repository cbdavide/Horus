'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var middlewares = require('./middleware');
var routers = require('./routers');
var wg = require('./util');

var expressServer = (function() {

    var server = express();

    server.use('/', express.static(__dirname + '/public'));
    server.use(bodyParser.urlencoded({extended: true}));
    server.use(bodyParser.json());

    server.set('view engine', 'ejs');
    server.set('views', './app/view');

    //Loading the middlewares
    for(let middle of middlewares)
        server[middle.method](middle.path, middle.middleware);

    //Loading the routers
    for(let router of routers)
        server[router.method](router.path, wg(router.callback));

    server.use((err, req, res, next) => {
	console.dir(err);

	if(err.code === 404)
	    res.status(404).end('404 Not found');
	else
	    next(err);
    });

    server.use((err, req, res, nex) => {
	res.end('Ops! somtheing went wrong.');
    });

    return {
        getServer: function() {
            return server;
        }
    }

})();

module.exports =  expressServer;
