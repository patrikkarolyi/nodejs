var requireOption = require('../common').requireOption;

/**
 * Delete an edge object
 */

module.exports = function (objectrepository) {

    var edgeModel = requireOption(objectrepository, 'edgeModel');

    return async function (req, res, next) {

        async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
                await callback(array[index], index, array);
            }
        }

        //explicit edge delete
        if(req.params.edgeid) {
            var index = res.tlp.graph._edges.indexOf(req.params.edgeid);
            if (index > -1) {
                res.tlp.graph._edges.splice(index, 1);
            }


            console.log("deleted edge: " + req.params.edgeid);
            await edgeModel.deleteOne({_id: req.params.edgeid});
        }

        //edge delete due to vertex delete
        if(req.params.vertexid){
            var edgesToDelete = res.tlp.graph._edges.filter(function(edge){return edge._a==req.params.vertexid || edge._b==req.params.vertexid});
            console.log("edge delete due to vertex delete");


            //TODO DELETE EDGES
            asyncForEach(edgesToDelete,async function(edge){
                console.log("edge delete "+edge._id);

                var index = res.tlp.graph._edges.indexOf(edge._id);
                if (index > -1) {
                    res.tlp.graph._edges.splice(index, 1);
                }

                console.log("deleted edge: " + edge._id);
                await edgeModel.delete({_id: edge._id});
            });



        }




        return next();
    };

};