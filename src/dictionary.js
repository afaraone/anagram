// creates an anagram dictionary
const {sortWord} = require('./sorter');

const parseText = text => {
  return text.split('\n')
};

const createDictionary = wordList => {
  let dictionary = {};
  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i];
    let sortedWord = sortWord(word);
    if (dictionary[sortedWord] === undefined) {
      dictionary[sortedWord] = [];
    };
    dictionary[sortedWord].push(word);
  };
  return dictionary;
};

module.exports = {parseText, createDictionary}
