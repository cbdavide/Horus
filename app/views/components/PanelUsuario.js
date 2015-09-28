
var React = require('react');
var InformacionPersonal = require('./InformacionPersonal');
var ListaCalendarios = require('./ListaCalendarios');


var PanelUsuario = React.createClass({

  render: function() {

    return (
      <div className="panelUsuario" >

        <InformacionPersonal
          avatar={this. props.avatar}
          nombre={this.props.nombre}
        />

        <ListaCalendarios horarios={this.props.horarios}/>

      </div>
    );
  }

});

module.exports = PanelUsuario;
