const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  const charCount = {};

  for (const char of sentence.replace(/ /g,'')) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
};



console.log(countLetters("Mr Jock, TV quiz PhD, bags few lynx"));
assertEqual(countLetters('Sphinx of black quartz, judge my vow')['S'], 1);
assertEqual(countLetters('The quick brown fox jumps over the lazy dog')[' '], undefined);
