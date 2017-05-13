const assert = require('assert')
var greet = require('../greet');
describe('The greet function', function(){

    it('should greet Nolo correctly', function(){
        assert.equal( greet('Nolo'),'Hello, Nolo');
    });
});
