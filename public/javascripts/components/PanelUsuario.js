
var React = require('react');
var InformacionPersonal = require('./InformacionPersonal');
var ListaCalendarios = require('./ListaCalendarios');


var PanelUsuario = React.createClass({

  render: function() {

    return (
      <div className="panelUsuario" >

        <InformacionPersonal
          avatar="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/10404085_944502215582948_7976228266989840397_n.jpg?oh=0c7faee63d737e5dbdd58e6a518ad830&oe=566CF784&__gda__=1453396494_79146a348e2dd73c95a10db3593425a5"
          nombre="David"
        />

        <ListaCalendarios />

      </div>
    );
  }

});

module.exports = PanelUsuario;
