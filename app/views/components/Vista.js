
var  React = require('react');
var  Calendario = require('./Calendario');
var  Usuarios = require('./Usuarios');
var  PanelUsuario = require('./PanelUsuario');

var Vista = React.createClass({

  getInitialState: function() {
    return {
      calendario: [
        {
          nombre: 'Lunes',
          bloques: [
            {
              key: '6-8',
              counter: 0,
            },
            {
              key: '8-10',
              counter: 0,
            },
            {
              key: '10-12',
              counter: 0,
            },
            {
              key: '12-2',
              counter: 0,
            },
            {
              key: '2-4',
              counter: 0,
            },
            {
              key: '4-6',
              counter: 0,
            },
          ]
        },
        {
          nombre: 'Martes',
          bloques: [
            {
              key: '6-8',
              counter: 0,
            },
            {
              key: '8-10',
              counter: 0,
            },
            {
              key: '10-12',
              counter: 0,
            },
            {
              key: '12-2',
              counter: 0,
            },
            {
              key: '2-4',
              counter: 0,
            },
            {
              key: '4-6',
              counter: 0,
            },
          ]
        },
        {
          nombre: 'Miercoles',
          bloques: [
            {
              key: '6-8',
              counter: 0,
            },
            {
              key: '8-10',
              counter: 0,
            },
            {
              key: '10-12',
              counter: 0,
            },
            {
              key: '12-2',
              counter: 0,
            },
            {
              key: '2-4',
              counter: 0,
            },
            {
              key: '4-6',
              counter: 0,
            },
          ]
        },
        {
          nombre: 'Jueves',
          bloques: [
            {
              key: '6-8',
              counter: 0,
            },
            {
              key: '8-10',
              counter: 0,
            },
            {
              key: '10-12',
              counter: 0,
            },
            {
              key: '12-2',
              counter: 0,
            },
            {
              key: '2-4',
              counter: 0,
            },
            {
              key: '4-6',
              counter: 0,
            },
          ]
        },
        {
          nombre: 'Viernes',
          bloques: [
            {
              key: '6-8',
              counter: 0,
            },
            {
              key: '8-10',
              counter: 0,
            },
            {
              key: '10-12',
              counter: 0,
            },
            {
              key: '12-2',
              counter: 0,
            },
            {
              key: '2-4',
              counter: 0,
            },
            {
              key: '4-6',
              counter: 0,
            },
          ]
        }
      ]
    };
  },

  componentDidMount: function() {
    var self = this;
    setTimeout(function(){
      self.setState(function(prev){
        prev.calendario[0].bloques[0].counter = 5;
        return {
          calendario: prev.calendario
        }
      });
    },3000,self);
  },

  render: function(){
    return (
      <section className="vista">
        <PanelUsuario nombre={this.props.nombre} avatar={this.props.avatar}/>
        <Usuarios />
        <Calendario dias={this.state.calendario} colores={this.props.colores}/>
      </section>
    );
  }
});

module.exports = Vista;
