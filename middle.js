const middle = function(array) {
  let middle = [];

  // if the array has less than 3 elements, return an empty array
  if (array.length < 3) {
    return middle;
  }

  let isEven = array.length % 2 === 0;

  // if the length is even, grab the 2 middle elements
  if (isEven) {
    middle = (array.slice((array.length / 2) - 1, (array.length / 2) + 1));
  } else { // is the length is odd, just grab the middle element
    middle.push(array[Math.floor(array.length / 2)]);
  }

  return middle;
};

module.exports = middle;
