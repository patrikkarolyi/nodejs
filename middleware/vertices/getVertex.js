var requireOption = require('../common').requireOption;

/**
 * Get a vertex object
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        return next();
    };

};