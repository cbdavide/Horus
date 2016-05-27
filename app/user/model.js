
var db = require('../../db');

module.exports = {

    insert: (user) => {
        return db.collection('users')
            .insert(user);
    },

    findUser: (uname) => {
        return db.collection('users')
            .findOne({username: uname}, {
                _id: false,
                username: false,
                password: false
            });
    }

}
