
var  React = require('react');
var  Calendario = require('./Calendario');
var  Usuarios = require('./Usuarios');
var  PanelUsuario = require('./PanelUsuario');

var Vista = React.createClass({

  getInitialState: function() {
    return {
      calendario: null
    }
  },

  render: function(){
    return (
      <section className="vista">
        <PanelUsuario
          nombre={this.props.nombre}
          avatar={this.props.avatar}
          horarios={this.props.horarios}
        />
        <Usuarios />
        <Calendario dias={this.state.calendario} colores={this.props.colores}/>
      </section>
    );
  }
});

module.exports = Vista;
