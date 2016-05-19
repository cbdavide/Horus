
module.exports = {

    path: '/user/add',
    method: 'post',

    callback: (req, res) => {
        console.dir(req.body);
        res.end('Thanks');
    }
};
