// Generated by CoffeeScript 2.1.1
var When, _, _B, j, len, whenLibs, wlib;

_ = (_B = require('uberscore'))._;

When = require('when');

// augmenting When
whenLibs = ['keys', 'function', 'node', 'callbacks', 'generator', 'sequence', 'pipeline', 'parallel', 'poll', 'guard'];

for (j = 0, len = whenLibs.length; j < len; j++) {
  wlib = whenLibs[j];
  if (_.isUndefined(When[wlib])) {
    When[wlib] = require(`when/${wlib}`);
  }
}

if (_.isUndefined(When.each)) {
  When.each = function(collection, handler) {
    var isArray, iterArray;
    if (_B.isHash(collection)) {
      iterArray = _.keys(collection);
      isArray = false;
    } else {
      if (_.isArray(collection)) {
        iterArray = collection;
        isArray = true;
      } else {
        return When.reject(new Error("When.each: collection is neither [] or {}."));
      }
    }
    return When.iterate(function(i) {
      return i + 1;
    }, function(i) {
      return !(i < iterArray.length);
    }, function(i) {
      var idxOrKey;
      if (isArray) {
        idxOrKey = i;
      } else {
        idxOrKey = iterArray[i];
      }
      return handler(collection[idxOrKey], idxOrKey); // called with (val, idx|key)
    }, 0);
  };
}

module.exports = When;
