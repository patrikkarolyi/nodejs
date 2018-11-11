var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Vertex = db.model('Vertex', {
name: String
});

module.exports = Vertex;