var requireOption = require('../common').requireOption;

/**
 * Get a vertex object
 */

module.exports = function (objectrepository) {

    var vertexModel = requireOption(objectrepository, 'vertexModel');
    var result = [];

    return function (req, res, next) {

        vertexModel.find({},function (err, vertices) {
            result = vertices;
        });

        res.tlp.vertices = result;
        return next();


        /*res.tlp.vertexModel = [
            {
                id: 0,
                name: "pomelo_csucs"
            },
            {
                id: 1,
                name: "narancs_csucs"
            },
            {
                id: 2,
                name: "citrom_csucs"
            },
            {
                id: 3,
                name: "dinnye_csucs"
            },
            {
                id: 4,
                name: "alma_csucs"
            },
            {
                id: 5,
                name: "korte_csucs"
            },
            {
                id: 6,
                name: "banan_csucs"
            }
        ];*/

        return next();
    };

};