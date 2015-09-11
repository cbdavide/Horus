
import React from 'react';
import Calendario from './Calendario';
import Usuarios from './Usuarios';
import PanelUsuario from './PanelUsuario'

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

  render: function(){
    return (
      <section className="vista">
        <PanelUsuario />
        <Usuarios />
        <Calendario dias={this.state.calendario} colores={this.props.colores}/>
      </section>
    );
  }
});

export default Vista;
