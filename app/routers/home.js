require('node-jsx').install();

var fs = require('fs');

var React = require('react/addons');
var Main = require('../views/components');


var datos = {
  colores: [
    '#FFFFFF',
    '#E8F5E9',
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20'
  ]
};

var vista = new Main(datos);

var home = {

  path: '/home',
  method: 'get',
  callback: function(req,res) {
    fs.readFile('data_test/users.json', 'utf-8', function(err, data) {

      datos.usuario = JSON.parse(data)[1];

      fs.readFile('data_test/horarios.json', 'utf-8', function(err, data){

        datos.horarios = (JSON.parse(data)).map(function(horario){
          return {
            nombre: horario.nombre,
            key: horario.key
          };
        });

        res.render('index',{
          contenido : vista.render(),
          data : JSON.stringify(datos)
        });

      });

    });

  }

}

module.exports = home;
