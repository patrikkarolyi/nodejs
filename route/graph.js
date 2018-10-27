///require middlewares
var listGraphMW = require('../middleware/graphs/listGraph');
var getGraphMW = require('../middleware/graphs/getGraph');
var deleteGraphMW = require('../middleware/graphs/deleteGraph');
var createGraphMW = require('../middleware/graphs/createGraph');

var getVertexMW = require('../middleware/vertices/getVertex');
var deleteVertexMW = require('../middleware/vertices/deleteVertex');

var getEdgeMW = require('../middleware/edges/getEdge');
var deleteEdgeMW = require('../middleware/edges/deleteEdge');

var renderMW = require('../middleware/render');

module.exports = function (app) {

    var graphModel = {};

    ///graph routes
    var objectRepository = {
        graphModel: graphModel
    };

    /**
     * Add new graph GET/PUSH
     */
    app.use('/graphs/new',
        createGraphMW(objectRepository),
        renderMW(objectRepository, 'create a new graph'),
        function (req, res, next) {
            return res.redirect('/graphs/:graphid/edit');
        }
    );

    /**
     * Edit a graph GET/PUSH
     */
    app.use('/graphs/:graphid/edit',
        listGraphMW(objectRepository),
        renderMW(objectRepository, 'edit a graph')
    );

    /**
     * Delete a graph GET
     */
    app.use('/graphs/:graphid/delete',
        //get vertex and edge ids
        getGraphMW(objectRepository),
        deleteVertexMW(objectRepository),
        deleteEdgeMW(objectRepository),
        deleteGraphMW(objectRepository),
        renderMW(objectRepository, 'delete a graph'),
        function (req, res, next) {
            return res.redirect('/graphs');
        }
    );

    /**
     * View a graph GET
     */
    app.use('/graphs/:graphid/details',
        getGraphMW(objectRepository),
        getVertexMW(objectRepository),
        getEdgeMW(objectRepository),
        renderMW(objectRepository, 'view a graph')
    );

    /**
     * List all graphs GET
     */
    app.use('/graphs',
        listGraphMW(objectRepository),
        renderMW(objectRepository, 'list of graphs')
    );


}