
var horarios  = require('../../data_test/horarios.js');

var findHorario = function(id) {
  for(var i in horarios) {
    if(horarios[i].key == id)
      return horarios[i];
  }
}

var horario = {

  path: '/horario',
  method: 'get',
  callback: function(req,res) {
    res.json(findHorario(req.query.id));
  }


};

module.exports = horario;
