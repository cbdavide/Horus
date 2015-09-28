
var React = require('react');
var CalendarioDia = require('./CalendarioDia')

var Calendario = React.createClass({
  render: function() {

      if(this.props.colores && this.props.dias) {
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
    } else {
      return (
        <section className="calendario">
          <h1>Selecciona un horario.</h1>
        </section>
      );
    }
  }
});

module.exports = Calendario;
