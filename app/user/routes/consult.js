
module.exports = {

    path: '/user/:name',
    method: 'get',

    callback: (req, res) => {
        res.json({name: req.params.name});
    }

}
