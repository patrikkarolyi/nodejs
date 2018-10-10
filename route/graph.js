///require middlewares
var listGraphMW = require('../middleware/graphs/listGraph');
var renderMW = require('../middleware/render');

module.exports = function (app) {

var graphModel = {};

///graph routes
var objectRepository = {
    graphModel: graphModel
};

/**
 * List all graphs
 */


 //authMW(objectRepository),
app.use('/graphs',
    listGraphMW(objectRepository),
    renderMW(objectRepository, 'graphs')
);



}