const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 04: Part 1', () => {
  it('Should find number of fully overlapping pairs', () => {
    expect(part1(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`)).to.equal(2);
  });
});
describe('Day 04: Part 2', () => {
  it('Should find number of overlapping pairs', () => {
    expect(part2(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`)).to.equal(4);
  });
});
