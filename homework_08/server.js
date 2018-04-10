const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', routes);

let server = app.listen(3000, function() {
    let port = server.address().port;
    console.log("Express server listening on port %s.", port);
});