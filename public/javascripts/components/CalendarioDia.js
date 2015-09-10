
import React from 'react';
import CalendarioLabel from './CalendarioLabel';
import CalendarioBloque from './CalendarioBloque';

var CalendarioDia = React.createClass({

  render: function() {

    var colores = this.props.colores;
    var bloques = this.props.bloques.map(function(bloque){
      return (
        <CalendarioBloque
          key={bloque.key}
          counter={bloque.counter}
          colores={colores} />
      );
    });
    
    return (
      <section className="calendario__dia">
        <CalendarioLabel text={this.props.name} />
        {bloques}
      </section>
    );
  }
});

export default CalendarioDia;
