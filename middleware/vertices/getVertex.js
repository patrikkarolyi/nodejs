var requireOption = require('../common').requireOption;

/**
 * Get a vertex object
 */

module.exports = function (objectrepository) {

    objectrepository.vertexModel = [
        {
            id: 1,
            name: "a_csucs",
            x: 0,
            y: 1
        },
        {
            id: 2,
            name: "b_csucs",
            x: 0,
            y: 1
        },
        {
            id: 3,
            name: "c_csucs",
            x: 0,
            y: 1
        },
        {
            id: 4,
            name: "d_csucs",
            x: 0,
            y: 1
        }
    ];

    //var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        return next();
    };

};