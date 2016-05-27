var model = require('../model');

module.exports = {

    path: '/user/:username',
    method: 'get',

    callback: (req, res) => {
        model.findUser(req.params.username)
        .then((doc) => {
            if(doc)
                res.render('user/user', doc);
            else
                res.send('Not found');
        })
        .catch((err) => {
            //TODO: Handle 503 error
            console.log(err);
        });
    }

}
