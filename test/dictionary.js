const expect = require('chai').expect;
const {parseText} = require('../src/dictionary');
const {createDictionary} = require('../src/dictionary');
const {createHash} = require('../src/dictionary');

const text = "dog\ngod\nopt\ntop";
const wordArray = ["dog", "god", "opt", "top"];
const dictionary = {dgo: ["dog", "god"], opt: ["opt", "top"]};
describe('parseText', () => {
  it('returns an array of words', () => {
    expect(parseText(text)).to.deep.equal(wordArray);
  });
});

describe('createHash', () => {
  it('returns hash, key is sorted word val is array of words', () => {
    expect(createHash(wordArray)).to.deep.equal(dictionary);
  });
});

describe('createDictionary', () => {
  it('turns text into dictionary', () => {
    expect(createDictionary(text)).to.deep.equal(dictionary);
  });
});
