/**
 * Using the template engine render the values into the template
 */

module.exports = function (objectRepository,viewName) {

    return function (req, res) {
        //res.end('Render: ' + viewName);
        res.render(viewName,{objectRepository: objectRepository});
    };

};