// Reads dictionary and returns anagrams for word
const fs = require('fs');
const {sortWord} = require('./sorter');

const findAnagramArray = (key, dictionary) => {
  if (dictionary[key] !== undefined) {
    return dictionary[key];
  };
  return 'Entry not found'
};

const solve = word => {
  let sortedWord = sortWord(word);
  let string = fs.readFileSync('anagrams.txt', 'binary');
  let dictionary = JSON.parse(string);
  return findAnagramArray(sortedWord, dictionary);
};


module.exports = {findAnagramArray, solve}
