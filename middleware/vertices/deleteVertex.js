var requireOption = require('../common').requireOption;

/**
 * Delete a vertex object and all the edges which consist that one
 */

module.exports = function (objectrepository) {

    var vertexModel = requireOption(objectrepository, 'vertexModel');

    return function (req, res, next) {

        console.error("deleted vertex: " + req.params.vertexid);
        vertexModel.remove({ _id: req.params.vertexid }).exec();

        return next();
    };

};