var chai = require('chai');
var should = chai.should();
var callbackFunction = require('../server/module/callbacks.js');

describe('Testing a Callback Function', function() {
  context('callback.js', function() {
    it('should return "correct" when passed a string', function(done) {
      var testString = callbackFunction.testFunction('some string', callbackFunction.testCallback);

      testString.validator(function(error, value) {
        value.should.deep.equal(testString);
        done(error);
      });
    });
  });
});
