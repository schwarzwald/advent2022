module.exports = input => {
  let lines = input.split(/\r?\n/);
  let blueprints = lines.map(r => r.match(/(\d+)/g).map(Number))
    .map(([id, ore, clay, ob1, ob2, geo1, geo2]) => {
      return {
        id: id,
        oreCost: ore,
        clayCost: clay,
        obsidianCost: [ob1, ob2],
        geodeCost: [geo1, geo2]
      }
    });

  let result = 0;

  for (let blueprint of blueprints) {
    let queue = [{
      time: 24, ore: 0, clay: 0, obsidian: 0, geode: 0,
      oreRobot: 1, clayRobot: 0, obsidianRobot: 0, geodeRobot: 0
    }];

    let max = 0;

    let maxOre = Math.max(blueprint.oreCost, blueprint.clayCost, blueprint.obsidianCost[0], blueprint.geodeCost[0]);

    while (queue.length) {
      let { time, ore, clay, obsidian, geode,
        oreRobot, clayRobot, obsidianRobot, geodeRobot
      } = queue.pop();

      if (time <= 0) {
        max = Math.max(max, geode);
        continue;
      }

      if (max >= geode + (geodeRobot + geodeRobot + time) * time / 2) {
        continue;
      }

      if (obsidianRobot > 0) {
        let turns = Math.max(
          0,
          Math.ceil((blueprint.geodeCost[1] - obsidian) / obsidianRobot),
          Math.ceil((blueprint.geodeCost[0] - ore) / oreRobot));

        if (turns >= 0 && time - turns > 0) {
          turns++;
          queue.push({
            time: time - turns,
            ore: ore + oreRobot * turns - blueprint.geodeCost[0],
            clay: clay + clayRobot * turns,
            obsidian: obsidian + obsidianRobot * turns - blueprint.geodeCost[1],
            geode: geode + geodeRobot * turns,
            oreRobot: oreRobot,
            clayRobot: clayRobot,
            obsidianRobot: obsidianRobot,
            geodeRobot: geodeRobot + 1
          });
        }
      }
      if (clayRobot > 0) {
        let turns = Math.max(
          0,
          Math.ceil((blueprint.obsidianCost[1] - clay) / clayRobot),
          Math.ceil((blueprint.obsidianCost[0] - ore) / oreRobot));

        if (turns >= 0 && time - turns > 0) {
          turns++;
          queue.push({
            time: time - turns,
            ore: ore + oreRobot * turns - blueprint.obsidianCost[0],
            clay: clay + clayRobot * turns - blueprint.obsidianCost[1],
            obsidian: obsidian + obsidianRobot * turns,
            geode: geode + geodeRobot * turns,
            oreRobot: oreRobot,
            clayRobot: clayRobot,
            obsidianRobot: obsidianRobot + 1,
            geodeRobot: geodeRobot
          });
        }
      }

      if (oreRobot > 0 && clayRobot < blueprint.obsidianCost[1]) {
        let turns = Math.max(0, Math.ceil((blueprint.clayCost - ore) / oreRobot));

        if (turns >= 0 && time - turns > 0) {
          turns++;
          queue.push({
            time: time - turns,
            ore: ore + oreRobot * turns - blueprint.clayCost,
            clay: clay + clayRobot * turns,
            obsidian: obsidian + obsidianRobot * turns,
            geode: geode + geodeRobot * turns,
            oreRobot: oreRobot,
            clayRobot: clayRobot + 1,
            obsidianRobot: obsidianRobot,
            geodeRobot: geodeRobot
          });
        }
      }

      if (oreRobot > 0 && oreRobot < maxOre) {
        let turns = Math.max(0, Math.ceil((blueprint.oreCost - ore) / oreRobot));

        if (turns >= 0 && time - turns > 0) {
          turns++;
          queue.push({
            time: time - turns,
            ore: ore + oreRobot * turns - blueprint.oreCost,
            clay: clay + clayRobot * turns,
            obsidian: obsidian + obsidianRobot * turns,
            geode: geode + geodeRobot * turns,
            oreRobot: oreRobot + 1,
            clayRobot: clayRobot,
            obsidianRobot: obsidianRobot,
            geodeRobot: geodeRobot
          });
        }
      }
    }
    result += max * blueprint.id;
  }
  return result;
}
