var requireOption = require('../common').requireOption;

/**
 * Create a new edge, with the 2 given vertices
 */

module.exports = function (objectrepository) {

    var edgeModel = requireOption(objectrepository, 'edgeModel');

    return function (req, res, next) {

        var edge = new edgeModel({
            _a: req.body.selectora,
            _b: req.body.selectorb
        });


        edge.save(function (err) {
            console.log("an edge created with" )
        });

        return next();
    };

};