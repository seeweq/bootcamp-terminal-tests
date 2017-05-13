const assert = require('assert')
var isFromBellville = require('../isFromBellville')


describe('isFromBellville', function(){

    it("should return 'true' when given 'regNum.startsWith('CY')'", function(){
        assert.equal(isFromBellville('CY 23456'), true);
    });
});
