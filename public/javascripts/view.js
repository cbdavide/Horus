
var app = app || {};

(function(){

  var Usuarios = app.Usuarios;
  var Calendario = app.Calendario;

  var arregloDias = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
  ];

  app.Vista = React.createClass({
    render: function(){
      return (
        <section className="vista">
          <Usuarios />
          <Calendario dias={this.props.dias}/>
        </section>
      );
    }
  });

  React.render(
    <app.Vista dias={arregloDias}/>,
    document.getElementById('contenido')
  );

})();
