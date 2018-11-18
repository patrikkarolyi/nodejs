var requireOption = require('../common').requireOption;

/**
 * Create a new edge, with the 2 given vertices
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        var edge = new edgeModel({
            _a: req.body.vertexa,
            _b: req.body.vertexb
        });


        graph.save(function (err) {
            console.log("an edge created.")
        });

        return next();
    };

};