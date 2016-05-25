
var db = require('../../db');

module.exports = {

    insert: (user) => {
        return new Promise((reject, resolve) => {
            db.collection('users').insertOne(user, (err, r) => {
                if(err) reject(err);
                else resolve(r);
            });
        });
    }

}
