
var  React = require('react');
var  $ = require('jquery');
var  Calendario = require('./Calendario');
var  Usuarios = require('./Usuarios');
var  PanelUsuario = require('./PanelUsuario');

var Vista = React.createClass({

  getInitialState: function() {
    return {
      calendario: null
    }
  },

  seleccionarHorario: function(id) {
    $.ajax({

      url: '/horario',
      data_type: 'json',
      cache: false,
      data: {id: id},

      success: function(data) {
        this.setState({calendario: data});
      }.bind(this)

    });
  },

  render: function(){
    if(this.state.calendario) {
      return (
        <section className="vista">
          <PanelUsuario
            nombre={this.props.nombre}
            avatar={this.props.avatar}
            horarios={this.props.horarios}
            handler={this.seleccionarHorario}
          />
          <Usuarios />
          <Calendario
            key={this.state.calendario.key}
            dias={this.state.calendario.dias}
            colores={this.props.colores}
          />
        </section>
      );
    } else {
      return (
        <section className="vista">
          <PanelUsuario
            nombre={this.props.nombre}
            avatar={this.props.avatar}
            horarios={this.props.horarios}
            handler={this.seleccionarHorario}
          />
          <Usuarios />
          <Calendario />
        </section>
      );
    }
  }
});

module.exports = Vista;
