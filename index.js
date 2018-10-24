var express = require('express');
var app = express();

app.use(express.static('static'));

require('./route/graph')(app);
require('./route/outside')(app);

var server = app.listen(3000, function(){console.log("3000")});

