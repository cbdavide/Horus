
import React from 'react';

 var CalendarioBloque = React.createClass({

    aumentarIndex: function() {

      if(this.state.index < (this.props.colores.length - 1)){

        this.setState(function(previus) {
          return {index: previus.index+1};
        });
      }
      return this.state.index;
    },

    getInitialState: function(){
      return {
        index: -1,
        value:0,
        color: '#FFFFFF'
      };
    },

    aumentar: function(e) {
      this.setState(function(previus) {
        return {
          value: previus.value + 1,
          color: this.props.colores[this.aumentarIndex()]
        };
      });
    },

    render: function(){
      return (
        <div className="calendario__bloque"
             style={{'backgroundColor': this.state.color}}
             onClick={this.aumentar}>
        </div>
      );
    }
  });

  export default CalendarioBloque;
