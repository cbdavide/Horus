
import React from 'react';

var CalendarioLabel = React.createClass({
  render: function() {
    return (
      <div className="calendario__label">
        {this.props.text}
      </div>
    );
  }
});

export default CalendarioLabel;
