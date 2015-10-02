
var React = require('react');
var Colaborador = require('./Colaborador');

var Usuarios = React.createClass({
  render: function() {
    return (
      <section className="usuarios">
        {this.props.colaboradores.map(function(colaborador){

          return (
            <Colaborador
            avatar={colaborador.avatar}
            nombre={colaborador.nombre}
            />);
        })}
      </section>
    );
  }
});

module.exports = Usuarios;
