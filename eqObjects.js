const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) return false;
      } else {
        if (object1[key] !== object2[key]) return false;
      }
    }
  }

  return true;
};


// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects({}, {}), true);
assertEqual(eqObjects({}, { a: 1}), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// testing recursive solution
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);


const obj1 = {
  a: '1',
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
      g: {
        h: 5,
        i: {
          j: {
            k: {
              l: 0
            }
          }
        }
      }
    }
  }
}

const obj2 = {
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
      g: {
        h: 5,
        i: {
          j: {
            k: {
              l: 0
            }
          }
        }
      }
    }
  },
  a: '1',
}

const obj3 = {
  a: '1',
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
      g: {
        h: 5,
        i: {
          j: {
            k: {
              l: 1
            }
          }
        }
      }
    }
  }
}

assertEqual(eqObjects(obj1, obj2), true);
assertEqual(eqObjects(obj1, obj3), false);
