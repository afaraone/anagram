const expect = require('chai').expect;
const dictionary = {dgo: ["dog", "god"], opt: ["opt", "top"]};
const {findAnagramArray} = require('../src/solver')

describe('findAnagramArray', () => {
  it('searches key and returns anagram array', () => {
    expect(findAnagramArray("dgo", dictionary)).to.deep.equal(['dog', 'god'])
  })
  it('returns error string if key not found', () => {
    expect(findAnagramArray("blah", dictionary)).to.equal('Entry not found')
  });
});
