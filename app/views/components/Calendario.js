
var React = require('react');
var CalendarioDia = require('./CalendarioDia')

var Calendario = React.createClass({
  render: function() {

      if(this.props.colores && this.props.dias) {
        var colores = this.props.colores;
        var votar = this.props.votar;
        var dias = this.props.dias.map(function(dia){
          return (
            <CalendarioDia
              key={dia.key}
              name={dia.nombre}
              bloques={dia.bloques}
              colores={colores}
              votar={votar}
            />
          );
        });

        return (
          <section className="calendario">
            <h2 className="calendario__nombre">
              {this.props.nombre}
            </h2>
            <div className="calendario__dia__contanier">
              {dias}
            </div>
          </section>
        );
    } else {
      return (
        <section className="calendario-disable">
          <h1>Selecciona un horario.</h1>
        </section>
      );
    }
  }
});

module.exports = Calendario;
