const assert = require('assert')
var countAllFromTown = require('../countAllFromTown')

describe('countAllFromTown',function(){

  it("should return 'anyTown.length' when given 'eachVal.startsWith('location')",function(){
    assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
  });
});
