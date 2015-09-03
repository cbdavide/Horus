
var app = app || {};

(function(){

  var CalendarioLabel = app.CalendarioLabel;
  var CalendarioBloque = app.CalendarioBloque;

  app.CalendarioDia = React.createClass({
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

})();
