const expect = require('chai').expect;
const {parseText} = require('../src/dictionary');

const text = "dog\ngod\nopt\ntop";
const wordArray = ["dog", "god", "opt", "top"];

describe('parseText', () => {
  it('returns an array of words', () => {
    expect(parseText(text)).to.deep.equal(wordArray);
  });
});
