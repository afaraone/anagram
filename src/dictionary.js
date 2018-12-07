// creates an anagram dictionary
const {sortWord} = require('./sorter');
const request = require('request');
const fs = require('fs');

const parseText = text => {
  return text.split('\n')
};

const createHash = wordList => {
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

const createDictionary = text => {
  wordList = parseText(text);
  return createHash(wordList);
};

module.exports = {parseText, createHash, createDictionary}
