var requireOption = require('../common').requireOption;

/**
 * Create a new vertex object, with the given name
 */

module.exports = function (objectrepository) {

    var vertexModel = requireOption(objectrepository, 'vertexModel');

    return function (req, res, next) {

        var vertex = new vertexModel({
            name: req.body.vertexname
        });


        vertex.save(function (err) {
            console.log(req.body.vertexname + " created as a vertex.")
        });

        return next();
    };

};