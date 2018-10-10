var requireOption = require('../common').requireOption;

/**
 * Get the graph list and put the inventories on res.tpl.employees
 */

module.exports = function (objectrepository) {

    var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        return next();
    };

};