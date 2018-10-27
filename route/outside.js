///require middlewares

var renderMW = require('../middleware/render');


module.exports = function (app) {

    ///main route
    app.use('/', function (req, res, next) {
        next();
    }, renderMW("graphs"));

    ///user routes





}