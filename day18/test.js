const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 18: Part 1', () => {
  it('Should calculate the surface area of the droplets', () => {
    expect(part1(`2,2,2
1,2,2
3,2,2
2,1,2
2,3,2
2,2,1
2,2,3
2,2,4
2,2,6
1,2,5
3,2,5
2,1,5
2,3,5`)).to.equal(64);
  });
});
describe('Day 18: Part 2', () => {
  it('Should calculate the exterior surface area of the droplets', () => {
    expect(part2(`2,2,2
1,2,2
3,2,2
2,1,2
2,3,2
2,2,1
2,2,3
2,2,4
2,2,6
1,2,5
3,2,5
2,1,5
2,3,5`)).to.equal(58);
  });
});
