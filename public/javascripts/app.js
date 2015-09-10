
import React from 'react';
import Vista from './components/Vista';

var calendario = [
  {
    nombre: 'Lunes',
    bloques: [
      {
        key: '6-8',
        counter: 2,
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
        counter: 10,
      },
      {
        key: '4-6',
        counter: 2,
      },
    ]
  },
  {
    nombre: 'Martes',
    bloques: [
      {
        key: '6-8',
        counter: 2,
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
        counter: 10,
      },
      {
        key: '4-6',
        counter: 2,
      },
    ]
  },
  {
    nombre: 'Miercoles',
    bloques: [
      {
        key: '6-8',
        counter: 2,
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
        counter: 10,
      },
      {
        key: '4-6',
        counter: 2,
      },
    ]
  },
  {
    nombre: 'Jueves',
    bloques: [
      {
        key: '6-8',
        counter: 2,
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
        counter: 10,
      },
      {
        key: '4-6',
        counter: 2,
      },
    ]
  },
  {
    nombre: 'Viernes',
    bloques: [
      {
        key: '6-8',
        counter: 2,
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
        counter: 10,
      },
      {
        key: '4-6',
        counter: 2,
      },
    ]
  }
]



var dias = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes'
];

var bloque = {
  key: '6-8',
  counter: 10
}

var colors = [
  '#E8F5E9',
  '#C8E6C9',
  '#A5D6A7',
  '#81C784',
  '#66BB6A',
  '#4CAF50',
  '#43A047',
  '#388E3C',
  '#2E7D32',
  '#1B5E20'
];

React.render(
  <Vista dias={calendario} colores={colors}/>,
  document.getElementById('contenido')
);
setTimeout(function(){
  calendario[0].bloques[2].counter = 6;
  React.render(
    <Vista dias={calendario} colores={colors}/>,
    document.getElementById('contenido')
  );
  console.log('Listo mofo')
},3000);
