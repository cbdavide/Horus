'use strict';

var Promise = require('bluebird');

module.exports = function(genf) {
    let cr = Promise.coroutine(genf);
    
    return function(req, res, next) {
	cr(req, res, next).catch(next);
    };
};
