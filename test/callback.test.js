var chai = require('chai');
var expect = require('chai').expect;
var should = chai.should();
var callbackFunction = require('../server/module/callbacks.js');
var simpleFunction = callbackFunction.simpleFunction;

describe('Basic Tests', function() {
  context('The simpleFunction function', function () {
    it('should return "string" when passed a string.', function () {
      expect(simpleFunction('some string')).to.equal('string');
    });
  });
});

// describe('Testing a Callback Function', function() {
//   context('callback.js', function() {
//     it('should return "correct" when passed a string', function(done) {
//       var testString = callbackFunction.testFunction('some string', callbackFunction.testCallback);
//
//       testString.validator(function(error, value) {
//         value.should.deep.equal(testString);
//         done(error);
//       });
//     });
//   });
// });
