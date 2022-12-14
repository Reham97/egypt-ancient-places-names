'use strict';

var expect = require('chai').expect;
var egyptAncientPlaces = require('.');

describe('egypt-ancient-places', function() {
  it('should have a list of all available names', function() {
    expect(egyptAncientPlaces.all).to.satisfy(isArrayOfStrings);
  });

  it('should allow me to get a random name from the list', function() {
    expect(egyptAncientPlaces.random()).to.satisfy(isIncludedIn(egyptAncientPlaces.all));
  });
});

function isArrayOfStrings(array) {
  return array.every(function(i) {
    return typeof i === 'string';
  });
}

function isIncludedIn(array) {
  return function(item) {
    return array.includes(item);
  };
}
