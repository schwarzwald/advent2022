const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 23: Part 1', () => {
  it('Should calculate number of empty cells in the smallest bounding rectangle after 10 rounds', () => {
    expect(part1(`....#..
..###.#
#...#.#
.#...##
#.###..
##.#.##
.#..#..`)).to.equal(110);
  });
});
describe('Day 23: Part 2', () => {
  it('Should calculate the round when no elf moved', () => {
    expect(part2(`....#..
..###.#
#...#.#
.#...##
#.###..
##.#.##
.#..#..`)).to.equal(20);
  });
});
