const assertEqual = require('../assertEqual');
const tail = require('../tail');

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
