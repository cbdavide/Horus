
var React = require('react');

var Colaborador = React.createClass({

  render: function() {

    return (
      <figure className="usuarios__usuario">
        <img className="usuarios__imagen"
             src={this.props.avatar}
        />
      </figure>
    );

  }

});

module.exports = Colaborador;
