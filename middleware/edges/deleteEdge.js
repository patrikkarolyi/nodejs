var requireOption = require('../common').requireOption;

/**
 * Delete an edge object
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        return next();
    };

};