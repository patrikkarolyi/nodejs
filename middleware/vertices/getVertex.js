var requireOption = require('../common').requireOption;

/**
 * Get a vertex object
 */

module.exports = function (objectrepository) {

    //var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        res.tlp.vertexModel = [
            {
                id: 0,
                name: "a_csucs",
                x: 100,
                y: 100
            },
            {
                id: 1,
                name: "b_csucs",
                x: 200,
                y: 200
            },
            {
                id: 2,
                name: "c_csucs",
                x: 100,
                y: 200
            },
            {
                id: 3,
                name: "d_csucs",
                x: 200,
                y: 100
            }
        ];

        return next();
    };

};