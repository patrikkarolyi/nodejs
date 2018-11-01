var requireOption = require('../common').requireOption;

/**
 * Get an edge object
 */

module.exports = function (objectrepository) {

    //var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        res.tlp.edgeModel = [
            {
                id: 0,
                a: 0,
                b: 1,
                //demo
                aname: "a_csucs",
                bname: "b_csucs"
            },
            {
                id: 1,
                a: 1,
                b: 2,
                //demo
                aname: "b_csucs",
                bname: "c_csucs"
            },
            {
                id: 2,
                a: 2,
                b: 3,
                //demo
                aname: "c_csucs",
                bname: "d_csucs"
            }
        ];

        return next();
    };

};