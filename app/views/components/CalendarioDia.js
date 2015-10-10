
var React = require('react');
var CalendarioBloque = require('./CalendarioBloque');
var CalendarioLabel = require('./CalendarioLabel');

var CalendarioDia = React.createClass({

  render: function() {

    var votar = this.props.votar;
    var bloques = this.props.bloques.map(function(bloque){
      return (
        <CalendarioBloque
          key={bloque.key}
          id={bloque.key}
          counter={bloque.counter}
          votar={votar} />
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
