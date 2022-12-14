const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 14: Part 1', () => {
  it('Should calculate how many units of sand come to rest before falling into abyss', () => {
    expect(part1(`498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`)).to.equal(24);
  });
});
describe('Day 14: Part 2', () => {
  it('Should calculate how many units of sand come to rest before blocking the source', () => {
    expect(part2(`498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`)).to.equal(93);
  });
});
