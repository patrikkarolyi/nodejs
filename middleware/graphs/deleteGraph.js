var requireOption = require('../common').requireOption;

/**
 * Delete a graph object
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return async function (req, res, next) {

        console.log("deleted graph: " + req.params.graphid);
        await graphModel.remove({ _id: req.params.graphid });

        return next();
    };

};