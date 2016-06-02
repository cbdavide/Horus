'use strict';

var model = require('../model');

module.exports = {

    post: {
        path: '/user/signup',
        method: 'post',

        callback: function *(req, res) {

	    let doc = yield model.insert(req.body);

	    if(1 == doc.insertedCount)
		res.end('The user was successfully inserted');
	}
	    
    },

    get: {
        path: '/user/signup',
        method: 'get',

        callback: function *(req, res) {
            res.render('user/signUpForm', {});
        }
    }
};
