var express = require('express');
var path = require('path');
var routes = require('./server/routes');

var app = express();
var port = process.env.port || 8080;

app.use('/conversion', express.static(__dirname + '/client/'));
app.use('/conversion', express.static(__dirname + '/node_modules/'));

app.use('/conversion', routes); // task routes

app.get('/conversion', function (req, res) {
    res.sendFile(path.join(__dirname + '/server/views/index.html'));
});

app.listen(port, function() {
    console.log('Server running at port:', port);
});