var requireOption = require('../common').requireOption;

/**
 * Create a new graph object, with default values(vertices and edges)
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return async function (req, res, next) {

        var graph = new graphModel({
            _vertices: [],
            _edges: [],
            name: req.body.graphname,
            comment: req.body.graphcomment });

        res.tlp.graph = graph;

        await graph.save(function (err) {
            console.log(req.body.graphname + " created as a graph.")
        });

        return next();
    };

};