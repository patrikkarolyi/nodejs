var requireOption = require('../common').requireOption;

/**
 * Get a graph object
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return async function (req, res, next) {

        try {
            res.tlp.graph = await graphModel.findOne({_id:req.params.graphid});
            next();
        }catch (e) {
            return next(e);
        }
    };

};