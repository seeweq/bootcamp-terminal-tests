const assert = require('assert')
var isWeekday = require('../isWeekday');
describe('isWeekday', function(){

  it("should return'true'when given  day.startsWith('S')",function(){
    assert.equal(isWeekday('Monday'),true);
  });
});
