var assert = require('assert');
const expect = require('chai').expect;
var getGraphMV = require('../middleware/graphs/getGraph');

describe("getGraphMV", function() {
  it('if req.params.graphid is undefined it should return with exception',  function (done) {
    var objectrepositoryMock = {
      graphModel: {
        findOne: async function (gid) {
          return {};
        }
      }
    }
    var reqMock = {}
    var resMock = {}

    getGraphMV(objectrepositoryMock)(reqMock, resMock, function (err){
        expect(err).to.be.an('error');
        done();
    });
  });
  it('if req.params.graphid is not undefined and valid it should return with a graph', function (done) {
    var objectrepositoryMock = {
      graphModel: {
        findOne: async function (gid) {
          return {};
        }
      }
    }
    var reqMock = {
      params: {
        graphid: 123
      }
    }
    var resMock = {
      tlp: {}
    }

    getGraphMV(objectrepositoryMock)(reqMock, resMock, function () {
        expect(resMock.tlp.graph).to.be.an('object');
        done();
    });
  });
});
