'use strict';

var model = require('../model');

module.exports = {

    path: '/user/:username',
    method: 'get',

    callback: function *(req, res, next){

	let user = yield model.findUser(req.params.username);

	if(user){
	    res.render('user/user', user);
	} else {
	    let err = new Error("Not found");
	    err.code = 404;
	    next(err);
	}
    }

}
