var requireOption = require('../common').requireOption;

/**
 * Get a vertex object
 */

module.exports = function (objectrepository) {

    var vertexModel = requireOption(objectrepository, 'vertexModel');

    return async function (req, res, next) {

        try {
            res.tlp.vertices = await await vertexModel.find({});
            next();
        }catch (e) {
            return next(e);
        }

    };

};