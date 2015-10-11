
var  React = require('react');
var  $ = require('jquery');
var  Calendario = require('./Calendario');
var  Usuarios = require('./Usuarios');
var  PanelUsuario = require('./PanelUsuario');

var votar = function(key) {
  var keys = key.split('-');
  this.setState(function(anterior){
    var temp = anterior.calendario;
    var n = temp.dias[keys[1]].bloques[keys[2]].counter + 1;
    temp.dias[keys[1]].bloques[keys[2]].counter = n;
    return {
      calendario: temp
    };
  });
  console.log('here');
}

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

    this.socket.on('grabarVoto', function(bloqueID) {
      console.log('He recibido un voto ' + bloqueID);
      var v = votar.bind(this);
      v(bloqueID);
    }.bind(this))

  },

  seleccionarHorario: function(id) {

    //Leave former calendar group.
    if(this.state.calendario.key != 'empty'){
      this.socket.emit('calendarDisconnection', this.state.calendario.key);
      console.log('Desconectado de '+ this.state.calendario.key);
    }

    $.ajax({

      url: '/horario',
      data_type: 'json',
      cache: false,
      data: {id: id},

      success: function(data) {
        console.log(data);
        this.setState({calendario: data});
        //Join actual calendar.
        this.socket.emit('calendarConnection', this.state.calendario.key);
        console.log('Conectado a ' + this.state.calendario.key);
      }.bind(this)

    });
  },

  votar: function(counter, key) {
    var v = votar.bind(this);
    v(key);
    var data = {
      calendarID: this.state.calendario.key,
      bloqueID: key
    }
    this.socket.emit('voto', data);
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
