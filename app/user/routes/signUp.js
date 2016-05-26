var model = require('../model');

module.exports = {

    post: {
        path: '/user/signup',
        method: 'post',

        callback: (req, res) => {
            model.insert(req.body)
                .then((data) => {
                    console.dir(data);
                })
                .catch((err) => {
                    console.dir(err);
                });
                res.end('Thanks');
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
