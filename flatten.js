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


// implement the flatten function using recursion  
const flatten = function(array) {
  const flattened = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const flattenedElement of flatten(element)) {
        flattened.push(flattenedElement);
      }
    } else {
      flattened.push(element);
    }
  }

  return flattened;
};


let myArr = flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, 10, 11, 12]]]]) // => [1, 2, 3, 4, 5, 6]

console.log(myArr);