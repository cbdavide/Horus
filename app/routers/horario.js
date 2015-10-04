
var fs = require('fs');

var find = function(id, lista) {
  for(var i in lista) {
    if(lista[i].key == id)
      return lista[i];
  }
}

var findUsers = function(usersId, usersList) {
  var users = [];

  for(var i in usersId) {
    var user = find(usersId[i], usersList);
    users.push(user);
  }
  return users;
}

var horario = {

  path: '/horario',
  method: 'get',
  callback: function(req,res) {

    var id = req.query.id;
    var result = null;

    fs.readFile('data_test/horarios.json', 'utf-8', function(err, data){

      if(err)
        console.log(err);

      result = find(id, JSON.parse(data));

      fs.readFile('data_test/users.json', 'utf-8', function(err, data) {

        if(err)
          console.log(err);

        var usuarios = findUsers(result.usuarios, JSON.parse(data));
        result.usuarios = usuarios;

        res.json(result);
      });

    });

  }


};

module.exports = horario;
