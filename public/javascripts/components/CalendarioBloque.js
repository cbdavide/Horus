
var React = require('react');

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

    establecerColor: function(num) {
      if(num < (this.props.colores.length - 1)){
        return num;
      }else {
        return (this.props.colores.length - 1);
      }
    },

    render: function(){
      var color = this.props.colores[this.establecerColor(this.props.counter)];
      return (
        <div className="calendario__bloque"
             style={{'backgroundColor': color}}
             onClick={this.aumentar}>
        </div>
      );
    }
  });

  module.exports = CalendarioBloque;
