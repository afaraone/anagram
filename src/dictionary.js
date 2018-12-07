// creates an anagram dictionary
const sortWord = require('./sorter');
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

const writeDictionary = (url, filename) => {
  request.get(url, {encoding: 'binary'}, (err, res, body) => {
    let dictionary = JSON.stringify(createDictionary(body));
    fs.writeFile(filename, dictionary, 'binary', (err, data) => {
      if (err) throw err;
      console.log('Dictionary has been written!');
    });
  });
};

module.exports = {createDictionary, writeDictionary}
