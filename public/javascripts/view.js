var arregloDias = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes'
]

var Vista = React.createClass({
  render: function(){
    return (
      <section className="vista">
        <Usuarios />
        <Calendario dias={this.props.dias}/>
      </section>
    );
  }
});

var Calendario = React.createClass({
  render: function() {
    var dias = this.props.dias.map(function(d){
      return (
        <CalendarioDia name={d} />
      )
    });

    return (
      <section className="calendario">
        {dias}
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
  getInitialState: function(){
    return {value:0};
  },
  aumentar: function(e) {
    var temp = this.state.value + 1;
    this.setState({value: temp});
    console.log(temp);
  },
  render: function(){
    return (
      <div className="calendario__bloque" onClick={this.aumentar}>
        {this.state.value}
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

React.render(<Vista dias={arregloDias}/>, document.getElementById('contenido'));
