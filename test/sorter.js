const expect = require('chai').expect;
const {normalise} = require('../src/sorter');
const {sortAlpha} = require('../src/sorter');

describe('normalise', () => {
  it('removes special characters and makes lowercase', () => {
    expect(normalise("Tad-pole's!")).to.equal('tadpoles');
  });
});

describe('sortAlpha', () => {
  it('returns a string in alphabetical order', () => {
    expect(sortAlpha('tadpoles')).to.equal('adelopst');
  });
});
