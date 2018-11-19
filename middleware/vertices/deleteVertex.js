var requireOption = require('../common').requireOption;

/**
 * Delete a vertex object and all the edges which consist that one
 */

module.exports = function (objectrepository) {

    var vertexModel = requireOption(objectrepository, 'vertexModel');

    return async function (req, res, next) {

        var index = res.tlp.graph._vertices.indexOf(req.params.vertexid);
        if (index > -1) {
            res.tlp.graph._vertices.splice(index, 1);
        }

        console.log("deleted vertex: " + req.params.vertexid);
        await vertexModel.deleteOne({ _id: req.params.vertexid });

        return next();
    };

};