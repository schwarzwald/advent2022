const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 06: Part 1', () => {
  it('Should calculate how many characters need to be processed before the first start-of-packet marker is detected 1', () => {
    expect(part1('bvwbjplbgvbhsrlpgdmjqwftvncz')).to.equal(5);
  });
  it('Should calculate how many characters need to be processed before the first start-of-packet marker is detected 2', () => {
    expect(part1('nppdvjthqldpwncqszvftbrmjlhg')).to.equal(6);
  });
  it('Should calculate how many characters need to be processed before the first start-of-packet marker is detected 3', () => {
    expect(part1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).to.equal(10);
  });
  it('Should calculate how many characters need to be processed before the first start-of-packet marker is detected 4', () => {
    expect(part1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).to.equal(11);
  });
});
describe('Day 06: Part 2', () => {
  it('Should calculate how many characters need to be processed before the first start-of-message marker is detected 1', () => {
    expect(part2('bvwbjplbgvbhsrlpgdmjqwftvncz')).to.equal(23);
  });
  it('Should calculate how many characters need to be processed before the first start-of-message marker is detected 2', () => {
    expect(part2('nppdvjthqldpwncqszvftbrmjlhg')).to.equal(23);
  });
  it('Should calculate how many characters need to be processed before the first start-of-message marker is detected 3', () => {
    expect(part2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).to.equal(29);
  });
  it('Should calculate how many characters need to be processed before the first start-of-message marker is detected 4', () => {
    expect(part2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).to.equal(26);
  });
});
