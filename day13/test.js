const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 13: Part 1', () => {
  it('Should calculate sum of indices of pairs which are in correct order', () => {
    expect(part1(`[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`)).to.equal(13);
  });
});
describe('Day 13: Part 2', () => {
  it('Should calculate the decoder key for the distress signal', () => {
    expect(part2(`[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`)).to.equal(140);
  });
});
