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
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let middle = [];

  // if the array has less than 3 elements, return an empty array
  if (array.length < 3) {
    return middle;
  }

  let isEven = array.length % 2 === 0;

  // if the length is even, grab the 2 middle elements
  if (isEven) {
    middle = (array.slice((array.length / 2) - 1, (array.length / 2) + 1));
  } else { // is the length is odd, just grab the middle element
    middle.push(array[Math.floor(array.length / 2)]);
  }

  return middle;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
