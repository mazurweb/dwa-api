/**
 * Created by mikem on 7/26/2016.
 */

var express = require('express');
//var body_parser = require('body-parser');
var app = express();

// Config
var port = 9000;

app.listen(port, function() {
    console.log('Server Active on Port', port);
});