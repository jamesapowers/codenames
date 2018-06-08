const test = require('./default.js');
//const test = require('./heroes.js');

const RunTest = (words) => {
  let usedWords = {};
  let repeatedWords = [];

  for (let word of words) {
    if (usedWords[word]) {
      repeatedWords.push(word);
    } else {
      usedWords[word] = 1;
    }
  }

  return repeatedWords;
}

console.log(RunTest(test));
