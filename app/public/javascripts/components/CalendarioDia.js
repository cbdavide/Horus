
var React = require('react');
var CalendarioBloque = require('./CalendarioBloque');
var CalendarioLabel = require('./CalendarioLabel');

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

module.exports = CalendarioDia;
