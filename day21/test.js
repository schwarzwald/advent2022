const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 21: Part 1', () => {
  it('Should calculate what root monkey yells', () => {
    expect(part1(`root: pppw + sjmn
dbpl: 5
cczh: sllz + lgvd
zczc: 2
ptdq: humn - dvpt
dvpt: 3
lfqf: 4
humn: 5
ljgn: 2
sjmn: drzm * dbpl
sllz: 4
pppw: cczh / lfqf
lgvd: ljgn * ptdq
drzm: hmdt - zczc
hmdt: 32`)).to.equal(152);
  });
});
describe('Day 21: Part 2', () => {
  it('Should calculate what root monkey yells', () => {
    expect(part2(`root: pppw + sjmn
dbpl: 5
cczh: sllz + lgvd
zczc: 2
ptdq: humn - dvpt
dvpt: 3
lfqf: 4
humn: 5
ljgn: 2
sjmn: drzm * dbpl
sllz: 4
pppw: cczh / lfqf
lgvd: ljgn * ptdq
drzm: hmdt - zczc
hmdt: 32`)).to.equal(301);
  });
});
