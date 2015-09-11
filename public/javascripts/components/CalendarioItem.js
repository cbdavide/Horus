
import React from 'react';

var CalendarioItem = React.createClass({

  render: function() {

    return (
      <li className="panelUsuario__listaCalendarios__item">
        {this.props.nombre}
      </li>
    );
  }

});

export default CalendarioItem;
