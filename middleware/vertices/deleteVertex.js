var requireOption = require('../common').requireOption;

/**
 * Delete a vertex object and all the edges which consist that one
 */

module.exports = function (objectrepository) {

    var vertexModel = requireOption(objectrepository, 'vertexModel');

    return async function (req, res, next) {

        console.log("deleted vertex: " + req.params.vertexid);
        await vertexModel.remove({ _id: req.params.vertexid });

        return next();
    };

};