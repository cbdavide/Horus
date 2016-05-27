var model = require('../model');

module.exports = {

    post: {
        path: '/user/signup',
        method: 'post',

        callback: (req, res) => {
            model.insert(req.body)
                .then((data) => {
                    // console.dir(data);
                    res.end('The user was successfully inserted');
                })
                .catch((err) => {
                    //TODO: Handle 503 error
                    console.dir(err);
                    res.end('503');
                });
        }
    },

    get: {
        path: '/user/signup',
        method: 'get',

        callback: (req, res) => {
            res.render('user/signUpForm', {});
        }
    }
};
