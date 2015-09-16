
var React = require('react');
var CalendarioDia = require('./CalendarioDia')

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

module.exports = Calendario;
