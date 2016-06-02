'user strict';

var db = require('../../db');

module.exports = {

    insert: function (user) {
        return db.collection('users').insert(user);
    },

    findUser: function (uname) {
	return db.collection('users')
            .findOne({username: uname}, {
                _id: false,
                username: false,
                password: false
            });
    }

}
