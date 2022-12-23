const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 22: Part 1', () => {
  it('Should calculate coordinates after applying the instructions', () => {
    expect(part1(
      `        ...#
        .#..
        #...
        ....
...#.......#
........#...
..#....#....
..........#.
        ...#....
        .....#..
        .#......
        ......#.

10R5L5R10L4R5L5`)).to.equal(6032);
  });
});
describe('Day 22: Part 2', () => {
  it('Should calculate coordinates after applying the instructions on cube', () => {
    expect(part2(
      `        ...#
        .#..
        #...
        ....
...#.......#
........#...
..#....#....
..........#.
        ...#....
        .....#..
        .#......
        ......#.

10R5L5R10L4R5L5`)).to.equal(5031);
  });
});
