
var React = require('react');

var CalendarioItem = React.createClass({

  render: function() {

    return (
      <li className="panelUsuario__listaCalendarios__item">
        {this.props.nombre}
      </li>
    );
  }

});

module.exports =  CalendarioItem;
