const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, value) {
  let key;

  const keys = Object.keys(obj);

  for (let key of keys) {
    if (obj[key] === value) return key;
  }

  return key;
};


// TESTS
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const myObj = {
  a: 1,
  b: 'b',
  c: 'wednesday',
  z: 'omega',
};

assertEqual(findKeyByValue(myObj, 1), 'a');
assertEqual(findKeyByValue(myObj, '1'), undefined);
assertEqual(findKeyByValue(myObj, 'wednesday'), 'c');
