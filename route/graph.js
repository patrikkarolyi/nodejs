///require middlewares
var listGraphMW = require('../middleware/graphs/listGraph');
var getGraphMW = require('../middleware/graphs/getGraph');
var deleteGraphMW = require('../middleware/graphs/deleteGraph');
var createGraphMW = require('../middleware/graphs/createGraph');

var getVertexMW = require('../middleware/vertices/getVertex');
var deleteVertexMW = require('../middleware/vertices/deleteVertex');

var getEdgeMW = require('../middleware/edges/getEdge');
var deleteEdgeMW = require('../middleware/edges/deleteEdge');

var graphModel = require('../models/graph');
var vertexModel = require('../models/vertex');
var edgeModel = require('../models/edge');

var renderMW = require('../middleware/render');

module.exports = function (app) {

    var objectRepository = {
        graphModel: graphModel,
        vertexModel: vertexModel,
        edgeModel: edgeModel
    };

    /**
     * Add new graph GET/PUSH
     */
    app.get('/graphs/new',
        renderMW(objectRepository, 'graph_new'),
    );
    app.post('/graphs/new',
    createGraphMW(objectRepository),
    function (req, res, next) {
        return res.redirect('/graphs/3/edit');
    }
);

    /**
     * Edit a graph GET/PUSH
     */
    app.use('/graphs/:graphid/edit',
        getGraphMW(objectRepository),
        getVertexMW(objectRepository),
        getEdgeMW(objectRepository),
        renderMW(objectRepository, 'graph_edit')
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
        renderMW(objectRepository, 'graph_details')
    );

    /**
     * List all graphs GET
     */
    app.use('/graphs',
        listGraphMW(objectRepository),
        renderMW(objectRepository, 'graphs')
    );

}