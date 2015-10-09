
var  React = require('react');
var  $ = require('jquery');
var  Calendario = require('./Calendario');
var  Usuarios = require('./Usuarios');
var  PanelUsuario = require('./PanelUsuario');

var Vista = React.createClass({

  getInitialState: function() {
    return {
      calendario: {
        key: 'empty',
        usuarios: null
      }
    }
  },

  seleccionarHorario: function(id) {
    $.ajax({

      url: '/horario',
      data_type: 'json',
      cache: false,
      data: {id: id},

      success: function(data) {
        console.log(data);
        this.setState({calendario: data});
      }.bind(this)

    });
  },

  votar: function(counter) {
    console.log('Thanks for voting.');
    console.log(counter);
  },

  render: function(){
    return (
      <section className="vista">
        <PanelUsuario
          nombre={this.props.nombre}
          avatar={this.props.avatar}
          horarios={this.props.horarios}
          handler={this.seleccionarHorario}
        />
        <Calendario
          key={this.state.calendario.key }
          dias={this.state.calendario.dias }
          nombre={this.state.calendario.nombre}
          colores={this.props.colores }
          votar={this.votar}
        />
        <Usuarios
          colaboradores={this.state.calendario.usuarios}
        />
      </section>
    );
  }
});

module.exports = Vista;
