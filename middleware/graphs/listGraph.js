var requireOption = require('../common').requireOption;

/**
 * Get all the graph objects
 */

module.exports = function (objectrepository) {

    //TODO ASYNC FETCH
    var graphModel = requireOption(objectrepository, 'graphModel');
    var result =[];

    return async function (req, res, next) {
        
        /*graphModel.find({},function (err, graphs) {
            if(err){
                return next(err);
            }
            res.tlp.graphs = graphs;
            return next();
        });*/

        try {
            res.tlp.graphs = await graphModel.find();
            next();
        }catch (e) {
            return next(e);
        }


    };

};