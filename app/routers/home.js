require('node-jsx').install();

var React = require('react/addons');
var View = require('../../public/javascripts/components/Vista');

var Vista = React.createFactory(View);

var colors = [
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
];

var home = {

  path: '/home',
  method: 'get',
  callback: function(req,res) {

    var text = React.renderToString(Vista({colores: colors}));

    res.render('index',{
      contenido : text
    });
  }

}

module.exports = home;
