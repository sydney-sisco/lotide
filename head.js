const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([-1,0,1]), -1);
assertEqual(head(["monday", "tuesday", "wednesday"]), "monday");
assertEqual(head(['one']), 'one');
assertEqual(head([], undefined));
