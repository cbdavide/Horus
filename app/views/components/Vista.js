
var  React = require('react');
var  $ = require('jquery');
var  Calendario = require('./Calendario');
var  Usuarios = require('./Usuarios');
var  PanelUsuario = require('./PanelUsuario');

var Vista = React.createClass({

  socket: null,

  getInitialState: function() {
    return {
      calendario: {
        key: 'empty',
        usuarios: null
      }
    }
  },

  componentDidMount: function() {
    this.socket = io();
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

  votar: function(counter, key) {
    //TODO: Interacción con el servidor por medio de SocketIO
    var keys = key.split('-');
    this.setState(function(anterior){
      var temp = anterior.calendario;
      var n = temp.dias[keys[1]].bloques[keys[2]].counter + 1;
      temp.dias[keys[1]].bloques[keys[2]].counter = n;
      return {
        calendario: temp
      };
    });
    console.log(socket);
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
