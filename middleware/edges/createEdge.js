var requireOption = require('../common').requireOption;

/**
 * Create a new edge, with the 2 given vertices
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        return next();
    };

};