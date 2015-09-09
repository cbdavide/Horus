
import React from 'react';
import CalendarioLabel from './CalendarioLabel';
import CalendarioBloque from './CalendarioBloque';

var CalendarioDia = React.createClass({
  render: function() {
    return (
      <section className="calendario__dia">
        <CalendarioLabel text={this.props.name} />
        <CalendarioBloque colores={this.props.colores} />
        <CalendarioBloque colores={this.props.colores} />
        <CalendarioBloque colores={this.props.colores} />
        <CalendarioBloque colores={this.props.colores} />
        <CalendarioBloque colores={this.props.colores} />
        <CalendarioBloque colores={this.props.colores} />
      </section>
    );
  }
});

export default CalendarioDia;
