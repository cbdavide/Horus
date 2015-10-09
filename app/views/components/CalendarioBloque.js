
var React = require('react');

var CalendarioBloque = React.createClass({

  render: function() {
    return (
      <div className="calendario__bloque"
           onClick={this.props.votar.bind(null,this.props.counter)}>
     </div>
    );
  }

});

module.exports = CalendarioBloque;
