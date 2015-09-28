
var React = require('react');
var CalendarioItem = require('./CalendarioItem');

var ListaCalendarios = React.createClass({

  render: function() {

    return (
      <ul className="panelUsuario__listaCalendarios">
        {this.props.horarios.map(function(horario){
          return (<CalendarioItem key={horario.key} nombre={horario.nombre} />);
        })}
      </ul>
    );
  }

});

module.exports = ListaCalendarios;
