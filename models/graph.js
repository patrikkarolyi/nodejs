var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Graph = db.model('Graph', {
  _vertices: [{
    type: Schema.Types.ObjectId,
    ref: 'Vertex'
  }],
  _edges: [{
    type: Schema.Types.ObjectId,
    ref: 'Edge'
  }],
  name: String,
  date: {
    type: Date,
    default: Date.now
  },
  comment: String
});

module.exports = Graph;