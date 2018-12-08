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
        getGraphMW(objectRepository),
        createEdgeMW(objectRepository),
        updateGraphMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/graphs/' +req.params.graphid+ '/edit');
        }
    );

    /**
     * Delete an edge GET
     */
    app.get('/graphs/:graphid/edit/edges/:edgeid/delete',
        getGraphMW(objectRepository),
        deleteEdgeMW(objectRepository),
        updateGraphMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/graphs/'+req.params.graphid+'/edit');
        }
    );

}