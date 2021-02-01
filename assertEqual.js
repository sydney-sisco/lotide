const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🟢🟢🟢 Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('🚨🚨🚨 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Monday", "Monday");
assertEqual(1, 1);
assertEqual(1, 2);
