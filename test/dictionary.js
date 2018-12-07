const expect = require('chai').expect;
const {parseText} = require('../src/dictionary');
const {createDictionary} = require('../src/dictionary');

const text = "dog\ngod\nopt\ntop";
const wordArray = ["dog", "god", "opt", "top"];
const dictionary = {dgo: ["dog", "god"], opt: ["opt", "top"]};
describe('parseText', () => {
  it('returns an array of words', () => {
    expect(parseText(text)).to.deep.equal(wordArray);
  });
});

describe('createDictionary', () => {
  it('returns hash, key is sorted word val is array of words', () => {
    expect(createDictionary(wordArray)).to.deep.equal(dictionary);
  });
});
