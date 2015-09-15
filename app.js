
// require('node-jsx').install();

var express = require('express');
var http = require('http');

var routers = require('./app/routers');

// var React = require('react/addons');
// var View = require('./public/javascripts/components/Vista');

// var Vista = React.createFactory(View);

var app = express();

var PORT = 3000;

app.use('/', express.static(__dirname+'/public'));

app.set('views','./views');
app.set('view engine', 'ejs');

for(var i in routers) {

  var router = routers[i];
  app[router.method](router.path, router.callback);

}



// var colors = [
//   '#FFFFFF',
//   '#E8F5E9',
//   '#C8E6C9',
//   '#A5D6A7',
//   '#81C784',
//   '#66BB6A',
//   '#4CAF50',
//   '#43A047',
//   '#388E3C',
//   '#2E7D32',
//   '#1B5E20'
// ];
//
// app.get('/home', function(req,res) {
//   // res.sendFile(__dirname+'/public/index.html');
//   var text = React.renderToString(Vista({
//     colores: colors
//   }));
//   res.render('index',{
//     contenido : text
//   });
// });
//

var server = http.createServer(app);
server.listen(PORT, function() {
  console.log('Servidor corriedno en el puerto '+PORT);
});
