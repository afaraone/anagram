const expect = require('chai').expect;
const {createDictionary} = require('../src/dictionary');

const text = "dog\ngod\nopt\ntop";
const dictionary = {dgo: ["dog", "god"], opt: ["opt", "top"]};

describe('createDictionary', () => {
  it('turns text into dictionary', () => {
    expect(createDictionary(text)).to.deep.equal(dictionary);
  });
});
