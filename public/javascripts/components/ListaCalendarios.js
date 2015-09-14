
var React = require('react');
var CalendarioItem = require('./CalendarioItem');

var ListaCalendarios = React.createClass({

  render: function() {

    return (
      <ul className="panelUsuario__listaCalendarios">
        <CalendarioItem nombre="Grupo de trabajo" />
        <CalendarioItem nombre="Estudiar cálculo" />
      </ul>
    );
  }

});

module.exports = ListaCalendarios;
