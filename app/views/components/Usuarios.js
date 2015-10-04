
var React = require('react');
var Colaborador = require('./Colaborador');

var Usuarios = React.createClass({
  render: function() {
    if(this.props.colaboradores){

      var usuarios = this.props.colaboradores.map(function(colaborador) {
        return (
          <Colaborador
            key={colaborador.key}
            avatar={colaborador.avatar}
            nombre={colaborador.nombre}
          />
        );
      });

      return (
        <section className="usuarios">
          {usuarios}
        </section>
      );

    } else {
      return (
        <section className="usuarios">
        </section>
      );
    }
  }
});

module.exports = Usuarios;
