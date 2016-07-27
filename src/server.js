/**
 * Created by mikem on 7/26/2016.
 */

var express = require('express');
var body_parser = require('body-parser');
var app = express();

// Config
var port = 9000;

app.use(body_parser.json());
app.use('/api', require('../routes/api.js')(express));

var server = app.listen(port);

module.exports = server;