const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length > 1) {
    return array.slice(1);
  } else {
    return [];
  }
};


// test case: check basic functionality
let test = [1, 2, 3];
let testTail = tail(test);
assertEqual(testTail.toString(), [2, 3].toString());

// test case: array with single element returns empty array
test = [5];
testTail = tail(test);
assertEqual(testTail.toString(), [].toString());

// test case: empty array returns empty array
test = [];
testTail = tail(test);
assertEqual(testTail.toString(), [].toString());


// test case: check that original array is not modified
test = ["Jan", "Feb", "March", "April"];
tail(test);
assertEqual(test.length, 4); // original array should still have 3 elements!
