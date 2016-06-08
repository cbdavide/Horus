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
                name: true,
		lastname: true,
		email: true
            });
    },

    findUserP: function(uname) {
	return db.collection('users')
	    .findOne({username: uname}, {
		_id: false,
		password: true
	    });
    }
};
