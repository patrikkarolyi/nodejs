var assert = require('assert');
const expect = require('chai').expect;
var deleteEdgeMV = require('../middleware/edges/deleteEdge');

describe("deleteEdgeMV", async function () {
    it('delete edge by given edgeid', function (done) {
        var objectrepositoryMock = {
            edgeModel: {
                deleteOne: async function (eid) { }
            }
        }
        var reqMock = {
            params: {
                edgeid: 1
            }
        }
        var resMock = {
            tlp: {
                graph: { _edges: [1, 2, 3] }
            }
        }

        deleteEdgeMV(objectrepositoryMock)(reqMock, resMock, function (err) {
            expect(resMock.tlp.graph._edges).to.not.include(1);
            expect(resMock.tlp.graph._edges).to.include(2);
            expect(resMock.tlp.graph._edges).to.include(3);
            done();
        });
    });
    it('delete edge(s) by given vertexid which is was part of the edge ', function(done){
        var objectrepositoryMock = {
            edgeModel: {
                deleteOne: async function (eid) { }
            }
        }
        var reqMock = {
            params: {
                vertexid: 2
            }
        }
        var resMock = {
            tlp: {
                edges: [
                    { _a: 1, _b: 1, _id: 1 },
                    { _a: 1, _b: 2, _id: 2 },
                    { _a: 2, _b: 2, _id: 3 }
                ],
                graph: { _edges: [1, 2, 3] }
            }
        }
        deleteEdgeMV(objectrepositoryMock)(reqMock, resMock, function () {
            expect(resMock.tlp.graph._edges).to.include(1);
            expect(resMock.tlp.graph._edges).to.not.include(2);
            expect(resMock.tlp.graph._edges).to.not.include(3);
            done();
        });
    });
});
