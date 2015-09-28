
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM
var React = require('react');
var Vista = require('./components/Vista');

var Main = function(data) {

  this.data = data || window.data;


  this.render = function() {

    if(canUseDOM) {
      React.render(
        <Vista
          colores={this.data.colores}
          nombre={this.data.usuario.nombre}
          avatar={this.data.usuario.avatar}
        />,
        document.getElementById('contenido')
      );
    } else {
      var VistaComponent = React.createFactory(Vista);
      return React.renderToString(
        VistaComponent({
          colores: this.data.colores,
          nombre: this.data.usuario.nombre,
          avatar: this.data.usuario.avatar
        })
      );
    }
  }
}

if(canUseDOM) {
  var main = new Main();
  main.render();
}

module.exports = Main;
