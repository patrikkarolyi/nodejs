///require middlewares
var getGraphMW = require('../middleware/graphs/getGraph');
var updateGraphMW = require('../middleware/graphs/updateGraph');

var deleteVertexMW = require('../middleware/vertices/deleteVertex');
var createVertexMW = require('../middleware/vertices/createVertex');

var deleteEdgeMW = require('../middleware/edges/deleteEdge');

var graphModel = require('../models/graph');
var vertexModel = require('../models/vertex');
var edgeModel = require('../models/edge');

module.exports = function (app) {

    ///vertex routes
    var objectRepository = {
        graphModel: graphModel,
        vertexModel: vertexModel,
        edgeModel: edgeModel
    };

    /**
    * Add new vertex POST
    */
    app.post('/graphs/:graphid/edit/vertices/new',
        getGraphMW(objectRepository),
        createVertexMW(objectRepository),
        updateGraphMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/graphs/'+ req.params.graphid +'/edit');
        }
    );


    /**
     * Delete a vertex and edges related to it GET
     */
    app.get('/graphs/:graphid/edit/vertices/:vertexid/delete',
        deleteEdgeMW(objectRepository),
        getGraphMW(objectRepository),
        deleteVertexMW(objectRepository),
        updateGraphMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/graphs/'+ req.params.graphid +'/edit');
        }
    );

}