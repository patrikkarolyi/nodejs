var requireOption = require('../common').requireOption;

/**
 * Get an edge object
 */

module.exports = function (objectrepository) {

    var edgeModel = requireOption(objectrepository, 'edgeModel');

    return async function (req, res, next) {

        try {

            async function asyncForEach(array, callback) {
                for (let index = 0; index < array.length; index++) {
                    await callback(array[index], index, array);
                }
            }

            const start = async() => {
                res.tlp.edges = [];

                await asyncForEach(res.tlp.graph._edges, async  (edgeid) =>  {
                    var edgeObject = await edgeModel.findOne({_id: edgeid});
                    if(edgeObject)
                        res.tlp.edges.push(edgeObject);
                });
                next();
            };
            start();
        } catch (e) {
            return next(e);
        }


        /*res.tlp.edgeModel = [
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
            },
            {
                id: 2,
                a: 0,
                b: 2
            }
        ];*/

    };

};