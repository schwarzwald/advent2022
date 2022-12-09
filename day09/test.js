const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 09: Part 1', () => {
  it('Should calculate how many positions the tail of the rope visited at least once', () => {
    expect(part1(`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`)).to.equal(13);
  });
});
describe('Day 09: Part 2', () => {
  it('Should calculate how many positions the tail of the rope of 10 knots visited at least once', () => {
    expect(part2(`R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`)).to.equal(36);
  });
});
