const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 05: Part 1', () => {
  it('Should determine which crates will be on to of the stacks', () => {
    expect(part1(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`)).to.equal('CMZ');
  });
});
describe('Day 05: Part 2', () => {
  it('Should determine which crates will be on to of the stacks while moving crates at once', () => {
    expect(part2(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`)).to.equal('MCD');
  });
});
