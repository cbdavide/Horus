
import React from 'react';
import CalendarioDia from './CalendarioDia';

var Calendario = React.createClass({
  render: function() {

      var colores = this.props.colores;
      var dias = this.props.dias.map(function(dia){
        return (
          <CalendarioDia name={dia.nombre} bloques={dia.bloques} colores={colores}/>
        );
      })

      return (
      <section className="calendario">
        {dias}
      </section>
    );
  }
});

export default Calendario;
