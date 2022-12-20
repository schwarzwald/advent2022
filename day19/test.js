const expect = require('expect.js');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 19: Part 1', () => {
  it('Should calculate sum of quality levels of all blueprints', () => {
    expect(part1(`Blueprint 1: Each ore robot costs 4 ore.Each clay robot costs 2 ore.Each obsidian robot costs 3 ore and 14 clay.Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`)
    ).to.equal(33);
  });
});
describe('Day 19: Part 2', () => {
  it('Should calculate product of maximum geodes for top 3 blueprints in 32 minutes', () => {
    expect(part2(`Blueprint 1: Each ore robot costs 4 ore.Each clay robot costs 2 ore.Each obsidian robot costs 3 ore and 14 clay.Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`)
    ).to.equal(3472);
  });
});
