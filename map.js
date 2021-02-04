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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


let words = ["ground", "control", "to", "major", "tom"];
let results = map(words, word => word[0]);
assertArraysEqual(results, [ 'g', 'c', 't', 'm', 't' ]);

words = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
results = map(words, word => word.toUpperCase());
assertArraysEqual(results, ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']);

words = [];
results = map(words, word => word.length);
assertArraysEqual(results, []);

words = ['thursday'];
results = map(words, word => word.length);
assertArraysEqual(results, [8]);

let numbers = ['1', '2', '3', '4', '5'];
results = map(numbers, number => Number(number));
assertArraysEqual(results, [ 1, 2, 3, 4, 5 ]);
