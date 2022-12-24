const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 24: Part 1', () => {
  it('Should find shortest path out of the blizard', () => {
    expect(part1(`#.######
#>>.<^<#
#.<..<<#
#>v.><>#
#<^v^^>#
######.#`)).to.equal(18);
  });
});
describe('Day 24: Part 2', () => {
  it('Should', () => {
    expect(part2(`#.######
#>>.<^<#
#.<..<<#
#>v.><>#
#<^v^^>#
######.#`)).to.equal(54);
  });
});
