var requireOption = require('../common').requireOption;

/**
 * Get all the graph objects
 */

module.exports = function (objectrepository) {

    objectrepository.graphModel = [
        {
            id: 1,
            name: "elsografom",
            desc: "Ez az adat fog lent megjelenni!",
            created: "2018.01.01"
        },
        {
            id: 2,
            name: "masodikgrafom",
            desc: "Kell egy description!",
            created: "2018.01.02"
        }
    ];

    //var graphModel = requireOption(objectrepository, 'graphModel');

    return function (req, res, next) {
        
        return next();
    };

};