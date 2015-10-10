
var canUseDOM = require('exenv').canUseDOM
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var Vista = require('./components/Vista');

var Main = function(data) {

  this.data = data || window.data;


  this.render = function() {

    if(canUseDOM) {
      ReactDOM.render(
        <Vista
          nombre={this.data.usuario.nombre}
          avatar={this.data.usuario.avatar}
          horarios={this.data.horarios}
        />,
        document.getElementById('contenido')
      );
    } else {
      var VistaComponent = React.createFactory(Vista);
      return ReactDOMServer.renderToString(
        VistaComponent({
          nombre: this.data.usuario.nombre,
          avatar: this.data.usuario.avatar,
          horarios: this.data.horarios
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
