var requireOption = require('../common').requireOption;

/**
 * Get a vertex object
 */

module.exports = function (objectrepository) {

    var vertexModel = requireOption(objectrepository, 'vertexModel');

    return async function (req, res, next) {

        try {

            async function asyncForEach(array, callback) {
                for (let index = 0; index < array.length; index++) {
                    await callback(array[index], index, array);
                }
            }

            const start = async() => {
                res.tlp.vertices = [];

                await asyncForEach(res.tlp.graph._vertices, async  (vertexid) =>  {
                    var vertexObject = await vertexModel.findOne({_id: vertexid});
                    if(vertexObject)
                    res.tlp.vertices.push(vertexObject);
                });
                next();
            };
            start();
        } catch (e) {
            return next(e);
        }

    };

};