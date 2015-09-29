
var React = require('react');

var CalendarioItem = React.createClass({

  render: function() {

    var id = this.props.id;
    var nombre = this.props.nombre;
    return (
      <li className="panelUsuario__listaCalendarios__item"
          onClick={this.props.handler.bind(null,id, nombre)}>

        {nombre}

      </li>
    );
  }

});

module.exports =  CalendarioItem;
