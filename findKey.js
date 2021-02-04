const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (obj, callback) => {
  let key;

  const keys = Object.keys(obj);

  for (const key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }

  return key;
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  monday:     { temp: 4 },
  tuesday:    { temp: 3 },
  wednesday:  { temp: 3 },
  thursday:   { temp: 8 },
  friday:     { temp: 2 },
}, x => x.temp > 5), 'thursday');

assertEqual(findKey({
  monday:     { temp: 4 },
  tuesday:    { temp: 3 },
  wednesday:  { temp: 3 },
  thursday:   { temp: 8 },
  friday:     { temp: 2 },
}, x => x.temp > 10), undefined);
