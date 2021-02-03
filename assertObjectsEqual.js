const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else {
        if (object1[key] !== object2[key]) return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({}, {}); // true
assertObjectsEqual({}, {a: 1}); // false

assertObjectsEqual({a: 1}, {a: 1}); // true
assertObjectsEqual({a: 1}, {b: 1}); // false

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1}); // false
assertObjectsEqual({a: 1, b: 2}, {b: 1, a: 2}); // false
