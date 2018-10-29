var requireOption = require('../common').requireOption;

/**
 * Get an edge object
 */

module.exports = function (objectrepository) {

    //var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {

        res.tlp.edgeModel = [
            {
                id: 1,
                aid: 0,
                bid: 1,
                //demo
                aname: "a_csucs",
                bname: "b_csucs"
            },
            {
                id: 2,
                aid: 0,
                bid: 1,
                //demo
                aname: "b_csucs",
                bname: "c_csucs"
            },
            {
                id: 3,
                aid: 0,
                bid: 1,
                //demo
                aname: "c_csucs",
                bname: "d_csucs"
            }
        ];

        return next();
    };

};