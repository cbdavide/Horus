'use strict';

var model = require('../model');

module.exports = {

    path: '/user/:username',
    method: 'get',

    callback: function *(req, res, next){

	let user = yield model.findUser(req.params.username);

	res.render('user/user', user);

    }

}
