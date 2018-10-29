var requireOption = require('../common').requireOption;

/**
 * Get all the graph objects
 */

module.exports = function (objectrepository) {

    //var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {
        
        res.tlp.graphModel = [
            {
                id: 1,
                name: "elsografom",
                desc: "Itt valami értelmes komment fog megjelenni!",
                created: "2018.01.01"
            },
            {
                id: 2,
                name: "masodikgrafom",
                desc: "Kell egy description!",
                created: "2018.01.02"
            },
            {
                id: 3,
                name: "harmadikgrafom",
                desc: "A komment.",
                created: "2018.01.03"
            }
        ];

        return next();
    };

};