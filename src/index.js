'use strict';

var uniqueRandomArray = require('unique-random-array');
var egyptAncientPlaces = require('./egypt-ancient-places.json');

module.exports = {
  all: egyptAncientPlaces,
  random: uniqueRandomArray(egyptAncientPlaces)
};
