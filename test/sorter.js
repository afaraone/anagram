const expect = require('chai').expect;
const {sortWord} = require('../src/sorter');

describe('sortWord', () => {
  it('it sorts word alphabetically', () => {
    expect(sortWord('tadpoles')).to.equal('adelopst');
  });

  it('normalises word and sorts alphabetically', () => {
    expect(sortWord("Tad-pole's!")).to.equal('adelopst');
  });
});
