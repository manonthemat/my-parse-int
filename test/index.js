var Code = require('code');
var Lab = require('lab');
var myParseInt = require('../lib');

// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

it('passing just the integer returns the integer', function(done) {
  var result = myParseInt(10);
  expect(result).to.equal(10);
  done();
});

it('passing more than two arguments should return NaN', function(done) {
  var result = myParseInt(10,10);
  expect(isNaN(result)).to.be.true();
  done();
});

it('passing no arguments should return NaN', function(done) {
  var result = myParseInt();
  expect(isNaN(result)).to.be.true();
  done();
});

it('an integer as a string should be converted to an integer', function(done) {
  var result = myParseInt('1');
  expect(result).to.equal(1);
  done();
});

it('should strip leading zeros', function(done) {
  var result = myParseInt('007');
  expect(result).to.equal(7);
  done();
});

it('should return NaN when there are any letters', function(done) {
  var result = myParseInt('11 Freunde');
  expect(isNaN(result)).to.be.true();
  done();
});

it('should return NaN on floats', function(done) {
  var result = myParseInt('3.142342');
  expect(isNaN(result)).to.be.true();
  done();
});

it('should return NaN when numbers are separated by whitespace', function(done) {
  var result = myParseInt('10 10');
  expect(isNaN(result)).to.be.true();
  done();
});
