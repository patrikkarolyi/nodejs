var requireOption = require('../common').requireOption;

/**
 * Create a new graph object, with default values(vertices and edges)
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {
        console.log(req.body.graphname)
        return next();
    };

};