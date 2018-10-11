///require middlewares
var listGraphMW = require('../middleware/graphs/listGraph');
var getGraphMW = require('../middleware/graphs/listGraph');
var deleteGraphMW = require('../middleware/graphs/listGraph');
var createGraphMW = require('../middleware/graphs/listGraph');

var getVertexMW = require('../middleware/vertices/listGraph');
var deleteVertexMW = require('../middleware/vertices/listGraph');
var createVertexMW = require('../middleware/vertices/listGraph');

var getEdgeMW = require('../middleware/edges/listGraph');
var deleteEdgeMW = require('../middleware/edges/listGraph');
var createEdgeMW = require('../middleware/edges/listGraph');

var renderMW = require('../middleware/render');

module.exports = function (app) {

var graphModel = {};

///graph routes
var objectRepository = {
    graphModel: graphModel
};

/**
 * List all graphs GET
 */
app.use('/graphs',
    listGraphMW(objectRepository),
    renderMW(objectRepository, 'graphs')
);

/**
 * Add new graph GET/PUSH
 */
app.use('/graphs/new',
    listGraphMW(objectRepository),
    renderMW(objectRepository, 'graphs'),
    function (req, res, next) {
        return res.redirect('/graphs/:graphid/edit');
    }
);

/**
 * Edit a graph GET/PUSH
 */
app.use('/graphs/:graphid/edit',
    listGraphMW(objectRepository),
    renderMW(objectRepository, 'graphs')
);

/**
 * Delete a graph GET
 */
app.use('/graphs/:graphid/delete',
    listGraphMW(objectRepository),
    renderMW(objectRepository, 'graphs'),
    function (req, res, next) {
        return res.redirect('/graphs');
    }
);

/**
 * View a graph GET
 */
app.use('/graphs/:graphid/details',
    listGraphMW(objectRepository),
    renderMW(objectRepository, 'graphs')
);




}