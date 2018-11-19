///require middlewares
var getGraphMW = require('../middleware/graphs/getGraph');
var updateGraphMW = require('../middleware/graphs/updateGraph');

var deleteEdgeMW = require('../middleware/edges/deleteEdge');
var createEdgeMW = require('../middleware/edges/createEdge');

var graphModel = require('../models/graph');
var vertexModel = require('../models/vertex');
var edgeModel = require('../models/edge');

module.exports = function (app) {


    ///graph routes
    var objectRepository = {
        graphModel: graphModel,
        vertexModel: vertexModel,
        edgeModel: edgeModel
    };

    /**
     * Add new edge GET/post
     */
    app.post('/graphs/:graphid/edit/edges/new',
        ///TODO check if vertices exist
        createEdgeMW(objectRepository),
        getGraphMW(objectRepository),
        updateGraphMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/graphs/:graphid/edit');
        }
    );

    /**
     * Delete an edge GET
     */
    app.get('/graphs/:graphid/edit/edges/:edgeid/delete',
        deleteEdgeMW(objectRepository),
        getGraphMW(objectRepository),
        updateGraphMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/graphs/:graphid/edit');
        }
    );

}