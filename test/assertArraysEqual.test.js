const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([],[]); // true
assertArraysEqual([],[1]); // false
assertArraysEqual([1, 2, 3],[1, 2, 3]); // true
assertArraysEqual([1, 2, 3],[1, 2, 3, 4]); // false
