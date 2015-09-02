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
    return {value:0, color:{red : 255, green: 255, blue: 255}};
  },
  aumentar: function(e) {
    var temp_value = this.state.value + 1;
    var temp_red = this.state.color.red - 20;
    var temp_blue = this.state.color.blue - 20;
    this.setState({value: temp_value, color:{red:temp_red,green:255,blue:temp_blue}});
  },
  render: function(){
    var color = this.state.color.red + ',' + this.state.color.green + ',' + this.state.color.blue;
    return (
      <div className="calendario__bloque"
           style={{'backgroundColor': 'rgb('+ color + ')'}}
           onClick={this.aumentar}>
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
