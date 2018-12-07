const expect = require('chai').expect;
const {normalise} = require('../src/sorter');

describe('normalise', () => {
  it('removes special characters and makes lowercase', () => {
    expect(normalise("Tad-pole's!")).to.equal('tadpoles');
  });
});
