var requireOption = require('../common').requireOption;

/**
 * Create a new edge, with the 2 given vertices
 */

module.exports = function (objectrepository) {

    var edgeModel = requireOption(objectrepository, 'edgeModel');

    return async function (req, res, next) {

        var edge = new edgeModel({
            _a: req.body.selectora,
            _b: req.body.selectorb
        });

        res.tlp.graph._edges.push(edge._id);

        await edge.save(function (err) {
            console.log(edge._id+ " created as an edge" )
        });

        return next();
    };

};