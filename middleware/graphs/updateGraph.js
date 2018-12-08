var requireOption = require('../common').requireOption;

/**
 * Update on a graph's vertices and edge list
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return async function (req, res, next) {

        var graph = res.tlp.graph;

        await graph.save(function (err) {
            console.log(graph.name + " updated as a graph.")
        });


        return next();
    };

};