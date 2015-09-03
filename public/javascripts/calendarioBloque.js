
var app = app || {};

(function(){

  var COLOR = [
    '#E8F5E9',
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20'
  ];

  app.CalendarioBloque = React.createClass({

    index: -1,
    aumentarIndex: function() {
      if(this.index < (COLOR.length - 1)){
        this.index += 1
      }
      return this.index;
    },

    getInitialState: function(){
      return {
        value:0,
        color: '#FFFFFF'
      };
    },

    aumentar: function(e) {
      this.setState({
        value: this.state.value + 1,
        color: COLOR[this.aumentarIndex()]
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

})();
