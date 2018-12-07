const expect = require('chai').expect;
const sinon = require('sinon');
const fs = require('fs');

const dictionary = {dgo: ["dog", "god"], opt: ["opt", "top"]};
const {findAnagramArray} = require('../src/solver')
const {solve} = require('../src/solver')

describe('findAnagramArray', () => {
  it('searches key and returns anagram array', () => {
    expect(findAnagramArray("dgo", dictionary)).to.deep.equal(['dog', 'god'])
  })
  it('returns error string if key not found', () => {
    expect(findAnagramArray("blah", dictionary)).to.equal('Entry not found')
  });
});

describe('solve', () => {
  beforeEach(() => {
    sinon.stub(fs, 'readFileSync').returns(JSON.stringify(dictionary));
  });

  afterEach(() => {
    sinon.restore();
  });
  it('reads dictionary file and returns array of anagrams', () => {
    expect(solve('dog')).to.deep.equal(['dog', 'god'])
  });
});
