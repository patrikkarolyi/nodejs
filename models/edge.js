var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Edge = db.model('Edge', {
  _a: {
    type: Schema.Types.ObjectId,
    ref: 'Vertex'
  },
  _b: {
    type: Schema.Types.ObjectId,
    ref: 'Vertex'
  }
});

module.exports = Edge;