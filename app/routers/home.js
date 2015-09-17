require('node-jsx').install();

var React = require('react/addons');
var Main = require('../views/components');

var datos = {
  colores : [
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

    res.render('index',{
      contenido : vista.render(),
      data : JSON.stringify(datos)
    });
  }

}

module.exports = home;
