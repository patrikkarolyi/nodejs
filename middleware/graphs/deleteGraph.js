var requireOption = require('../common').requireOption;

/**
 * Delete a graph object
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        console.error("deleted " + req.params.graphid + "graph");
        graphModel.remove({ _id: req.params.graphid }).exec();

        return next();
    };

};