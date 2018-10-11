var requireOption = require('../common').requireOption;

/**
 * Update on a graph's vertices and edge list
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        return next();
    };

};