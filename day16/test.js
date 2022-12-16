const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 16: Part 1', () => {
  it('Should calculate maximum pressure which can be released in 30 minutes', () => {
    expect(part1(`Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`)).to.equal(1651);
  });
});
describe('Day 16: Part 2', () => { });
