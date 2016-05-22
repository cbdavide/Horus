var model = require('../model');

module.exports = {

    path: '/user/add',
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
};
