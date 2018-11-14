var requireOption = require('../common').requireOption;

/**
 * Create a new graph object, with default values(vertices and edges)
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        var graph = new graphModel({
            _vertices: [],
            _edges: [],
            name: req.body.graphname,
            comment: req.body.graphcomment });


        graph.save(function (err) {
            console.log(req.body.graphname + " created as a graph.")
        });

        return next();
    };

};