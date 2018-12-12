var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', function(req,res,next){
  res.tlp = {};
  return next();
});




/**
 * Include all the routes
 */
require('./route/graph')(app);
require('./route/vertex')(app);
require('./route/edge')(app);
require('./route/outside')(app);


/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');
  
    //Flush out the stack to the console
    console.error(err.stack);
  });

var server = app.listen(3000, function(){console.log("3000")});

