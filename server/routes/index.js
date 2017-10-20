var router = require('express').Router();

var data = {
    task1: require('../data/task1.json'),
    task2: require('../data/task2.json'),
    task3: require('../data/task3.json')
};

router.get('/:id', function(req, res) {
    res.json(data[req.params.id] || {});
});

module.exports = router;