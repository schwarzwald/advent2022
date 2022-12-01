const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 01: Part 1', () => {
  it('Should calculate the maximum total calories carried by an elf', () => {
    expect(part1(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`)).to.equal(24000);
  });
});
describe('Day 01: Part 2', () => {
  it('Should calculate the total calories carried by top three elfs', () => {
    expect(part2(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`)).to.equal(45000);
  });
});
