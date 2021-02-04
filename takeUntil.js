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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual.toString()} === ${expected.toString()}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
  }
};

// keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }

  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1); // [ 1, 2, 5, 7, 2 ]
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = [1, 2, 3, 4];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, [1, 2, 3, 4]);

const data4 = [1, 2, 3, 4];
const results4 = takeUntil(data4, x => x > 0);
assertArraysEqual(results4, []);
