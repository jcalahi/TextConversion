var router = require('express').Router();

var data = {
    task1: require('../data/task1.json'),
    task2: require('../data/task2.json'),
    task3: require('../data/task3.json')
};

router.get('/task1', requestHandler);
router.get('/task2', requestHandler);
router.get('/task3', requestHandler);

function requestHandler(req, res) {
    var key = req.url.replace(/\//g, '');
    res.json(data[key] || {});
}

module.exports = router;