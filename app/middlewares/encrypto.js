var bcrypt = require('bcrypt');

module.exports = {

    method: 'post',
    path: '/user/signup',
    middleware: (req, res, next) => {
        if(req.body.password) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                //TODO: Handle the error
                if(!err)
                    req.body.password = hash;
                next();
            });
        }
    }
};
