
import React from 'react';
import Calendario from './Calendario';
import Usuarios from './Usuarios';

var Vista = React.createClass({
  render: function(){
    return (
      <section className="vista">
        <Usuarios />
        <Calendario dias={this.props.dias} colores={this.props.colores}/>
      </section>
    );
  }
});

export default Vista;
