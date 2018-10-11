var requireOption = require('../common').requireOption;

/**
 * Create a new vertex object, with the given name
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        return next();
    };

};