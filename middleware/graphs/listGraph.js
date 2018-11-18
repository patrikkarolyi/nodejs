var requireOption = require('../common').requireOption;

/**
 * Get all the graph objects
 */

module.exports = function (objectrepository) {

    //TODO ASYNC FETCH
    var graphModel = requireOption(objectrepository, 'graphModel');
    var result =[];

    return function (req, res, next) {
        
        graphModel.find({},function (err, graphs) {
            result = graphs;
        });

        res.tlp.graphs = result;
        return next();
    };

};