const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 20: Part 1', () => {
  it('Should apply the mixing and sum 1000th, 2000th and 3000th number after 0', () => {
    expect(part1(`1
2
-3
3
-2
0
4`)).to.equal(3);
  });
});
describe('Day 20: Part 2', () => {
  it('Should apply the key and apply mixing 10 times and sum 1000th, 2000th and 3000th number after 0', () => {
    expect(part2(`1
2
-3
3
-2
0
4`)).to.equal(1623178306n);
  });
});
