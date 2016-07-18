"use strict";
const express = require('express');
const http = require('http');
var app = express();
app.set('port', process.env.PORT || 8000);
app.use(express.static('public'));
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
