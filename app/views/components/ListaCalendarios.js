
var React = require('react');
var CalendarioItem = require('./CalendarioItem');

var ListaCalendarios = React.createClass({

  render: function() {

    var handler = this.props.handler;

    return (
      <ul className="panelUsuario__listaCalendarios">
        {
          this.props.horarios.map(function(horario){
          return (<CalendarioItem
                    key={horario.key}
                    id={horario.key}
                    nombre={horario.nombre}
                    handler={handler}
                  />);
        })}
      </ul>
    );
  }

});

module.exports = ListaCalendarios;
