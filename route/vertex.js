///require middlewares
var getGraphMW = require('../middleware/graphs/getGraph');

var deleteVertexMW = require('../middleware/vertices/deleteVertex');
var createVertexMW = require('../middleware/vertices/createVertex');

var deleteEdgeMW = require('../middleware/edges/deleteEdge');

module.exports = function (app) {

    var graphModel = {};
    var vertexModel = {};
    var edgeModel = {};

    ///vertex routes
    var objectRepository = {
        graphModel: graphModel,
        vertexModel: vertexModel,
        edgeModel: edgeModel
    };

    /**
    * Add new vertex GET/PUSH
    */
    app.use('/graphs/:graphid/edit/vertice/new',
        createVertexMW(objectRepository),
        getGraphMW(objectRepository),
        updateGraphMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/graphs/:graphid/edit');
        }
    );

    /**
     * Delete a vertex and edges related to it GET
     */
    app.use('/graphs/:graphid/edit/vertices/:vertexid/delete',
        deleteEdgeMW(objectRepository),
        deleteVertexMW(objectRepository),
        getGraphMW(objectRepository),
        updateGraphMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/graphs/:graphid/edit');
        }
    );

}