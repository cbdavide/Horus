
var routers = [
    require('./user/routes/signUp').post,
    require('./user/routes/signUp').get,
    require('./user/routes/consult')
];

module.exports = routers;
