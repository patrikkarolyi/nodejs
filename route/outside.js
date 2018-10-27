///require middlewares

var renderMW = require('../middleware/render');


module.exports = function (app) {

    var graphModel = [
        {
            id: 1,
            name:"elsografom",
            desc:"Kell egy description!",
            created:"2018.01.01"
        },
        {
            id: 2,
            name:"masodikgrafom",
            desc:"Kell egy description!",
            created:"2018.01.02"
        }
    ];

    ///graph routes
    var objectRepository = {
        graphModel: graphModel
    };

    ///main route
    app.use('/', function (req, res, next) {
        next();
    }, renderMW(objectRepository,"graphs"));

    ///user routes





}