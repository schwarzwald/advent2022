const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 03: Part 1', () => {
  it('Should calculcate sum of priorities of the duplicate items', () => {
    expect(part1(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`)).to.equal(157);
  });
});
describe('Day 03: Part 2', () => {
  it('Should calculcate sum of priorities of the items present in all rucksacks of a group', () => {
    expect(part2(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`)).to.equal(70);
  });
});
