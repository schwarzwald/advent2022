const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 17: Part 1', () => {
  it('Should calculate height of the tower after 2022 rocks fall', () => {
    expect(part1(`>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>`)).to.equal(3068)
  });
});
describe('Day 17: Part 2', () => {
  it('Should calculate height of the tower after 1000000000000 rocks fall', () => {
    expect(part2(`>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>`)).to.equal(1514285714288)
  });
});
