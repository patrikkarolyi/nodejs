///require middlewares

var renderMW = require('../middleware/render');

var listGraphMW = require('../middleware/graphs/listGraph');


module.exports = function (app) {

    ///main route
    app.use('/',function (req, res, next) {
        return res.redirect('/graphs');
    });

    
    ///user routes





}