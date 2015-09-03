
var app = app || {};

(function(){

  app.CalendarioLabel = React.createClass({
    render: function() {
      return (
        <div className="calendario__label">
          {this.props.text}
        </div>
      );
    }
  });

})();
