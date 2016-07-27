/**
 * Created by mikem on 7/26/2016.
 */

var express = require('express');
var app = express();

var port = 9000;

app.listen(port, function(){
    console.log('Our Server is Running Port', port);
});