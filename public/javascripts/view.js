var Vista = React.createClass({
  render: function(){
    return (
      <section className="vista">
        <Usuarios />
        <Calendario />
      </section>
    );
  }
});

var Calendario = React.createClass({
  render: function() {
    return (
      <section className="calendario">
        <CalendarioDia name="Lunes" />
        <CalendarioDia name="Martes" />
        <CalendarioDia name="Miércoles" />
        <CalendarioDia name="Jueves" />
        <CalendarioDia name="Viernes" />
      </section>
    );
  }
});

var CalendarioDia = React.createClass({
  render: function() {
    return (
      <section className="calendario__dia">
        <CalendarioLabel text={this.props.name} />
        <CalendarioBloque />
        <CalendarioBloque />
        <CalendarioBloque />
        <CalendarioBloque />
        <CalendarioBloque />
        <CalendarioBloque />
      </section>
    );
  }
});

var CalendarioBloque = React.createClass({
  render: function(){
    return (
      <div className="calendario__bloque">
      </div>
    );
  }
});

var CalendarioLabel = React.createClass({
  render: function() {
    return (
      <div className="calendario__label">
        {this.props.text}
      </div>
    );
  }
});

var Usuarios = React.createClass({
  render: function() {
    return (
      <section className="usuarios">
      </section>
    );
  }
});

React.render(<Vista />, document.getElementById('contenido'));
