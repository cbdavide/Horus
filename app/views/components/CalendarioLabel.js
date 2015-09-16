
var React = require('react')

var CalendarioLabel = React.createClass({
  render: function() {
    return (
      <div className="calendario__label">
        {this.props.text}
      </div>
    );
  }
});

module.exports = CalendarioLabel;
