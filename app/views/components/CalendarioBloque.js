
var React = require('react');

var CalendarioBloque = React.createClass({

  colores: [
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
  ],

  color: function() {

    if(this.props.counter < this.colores.length) {
      return this.colores[this.props.counter];
    } else {
      return this.colores[(this.colores.length - 1)];
    }

  },

  render: function() {
    return (
      <div className="calendario__bloque"
           style={{'backgroundColor': this.color()}}
           onClick={this.props.votar.bind(null,this.props.counter,this.props.id)}>
     </div>
    );
  }

});

module.exports = CalendarioBloque;
