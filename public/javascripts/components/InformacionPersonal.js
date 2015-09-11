
import React from 'react';

var InformacionPersonal = React.createClass({

  render: function() {

    return (
      <div className="panelUsuario__informacion" >

        <figure className="panelUsuario__avatar">
          <img src={this.props.avatar} />
        </figure>

        <span className="panelUsuario__label">
          {this.props.nombre}
        </span>

      </div>
    );

  }

});

export default InformacionPersonal;
