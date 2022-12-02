const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 02: Part 1', () => {
  it('Should calculate total score of all games', () => {
    expect(part1(`A Y
B X
C Z`)).to.equal(15);
  });
});
describe('Day 02: Part 2', () => {
  it('Should calculate total score of all games using the guide for results', () => {
    expect(part2(`A Y
B X
C Z`)).to.equal(12);
  });
}); 
