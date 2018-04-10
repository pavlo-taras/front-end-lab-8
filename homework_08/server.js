process.stdout.write('What are you waiting for? \n');

var express = require('express');
var app = express();


var server = app.listen(3001, function() {
    var port = server.address().port;
    console.log("Express server listening on port %s.", port);
});