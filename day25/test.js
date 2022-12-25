const expect = require('expect.js');
const part1 = require('./part1');

describe('Day 25: Part 1', () => {
  it('Should sum numbers in SNAFU format', () => {
    expect(part1(`1=-0-2
12111
2=0=
21
2=01
111
20012
112
1=-1=
1-12
12
1=
122`)).to.equal('2=-1=0');
  });
});