const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);

assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays([2,3,4], []), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// testing recursive solution
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

const arr1 = [[[[[[[[1]]]]]]]];
const arr2 = [[[[[[[[1]]]]]]]];
const arr3 = [[[[[[[[2]]]]]]]];
const arr4 = [[[[[[[[2]]]]]]],2];

assertEqual(eqArrays(arr1, arr2), true);
assertEqual(eqArrays(arr1, arr3), false);
assertEqual(eqArrays(arr1, arr3), false);
assertEqual(eqArrays(arr4, arr3), false);
assertEqual(eqArrays(arr4, arr4), true);