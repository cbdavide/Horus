
var app = app || {};

(function(){

  var CalendarioDia = app.CalendarioDia;

  app.Calendario = React.createClass({
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

})();
