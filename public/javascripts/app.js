
import React from 'react';
import Vista from './components/Vista';

var colors = [
  '#FFFFFF',
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
  <Vista colores={colors}/>,
  document.getElementById('contenido')
);

// setTimeout(function(){
//   calendario[0].bloques[2].counter = 6;
//   React.render(
//     <Vista dias={calendario} colores={colors}/>,
//     document.getElementById('contenido')
//   );
//   console.log('Listo mofo')
// },3000);
