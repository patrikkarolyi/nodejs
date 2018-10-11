var requireOption = require('../common').requireOption;

/**
 * Delete a vertex object and all the edges which consist that one
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        return next();
    };

};