const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 12: Part 1', () => {
  it('Should calculate the least amount of steps to get from S to E', () => {
    expect(part1(`Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`)).to.equal(31);
  });
});
describe('Day 12: Part 2', () => {
  it('Should calculate the least amount of steps to get from any a to E', () => {
    expect(part2(`Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`)).to.equal(29);
  });
});
