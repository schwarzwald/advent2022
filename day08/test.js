const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 08: Part 1', () => {
  it('Should count visible trees', () => {
    expect(part1(`30373
25512
65332
33549
35390`)).to.equal(21);
  });
});
describe('Day 08: Part 2', () => {
  it('Should find the highest scenic score for any tree', () => {
    expect(part2(`30373
25512
65332
33549
35390`)).to.equal(8);
  });
});
