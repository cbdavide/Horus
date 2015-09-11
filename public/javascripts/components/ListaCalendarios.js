
import React from 'react';
import CalendarioItem from './CalendarioItem'

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

export default ListaCalendarios;
