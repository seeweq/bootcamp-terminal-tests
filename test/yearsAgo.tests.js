const assert = require('assert')
var yearsAgo = require('../yearsAgo');
describe('yearsAgo',function(){

  it("should return 'new Date' when given ' date.getFullYear()'", function(){
    assert.equal(yearsAgo('1909'),108);
  })
})
