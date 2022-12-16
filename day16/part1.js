module.exports = input => {
  let rooms = input.split(/\r?\n/)
    .map(r => /Valve (\w+) has flow rate=(\d+); tunnels? leads? to valves? (.+)/.exec(r))
    .map(([, v, f, d]) => [v, +f, d.split(', ')]);

  let map = new Map();
  for (let room of rooms) {
    map.set(room[0], { rate: room[1], leads: room[2], distances: new Map() });
  }

  for (let key of map.keys()) {
    let visited = new Set();
    let queue = [[key, 0]];

    while (queue.length) {
      let current = queue.shift();

      if (visited.has(current[0])) {
        continue;
      }

      visited.add(current[0]);
      map.get(key).distances.set(current[0], current[1]);

      for (let lead of map.get(current[0]).leads) {
        queue.push([lead, current[1] + 1]);
      }
    }
  }

  let valves = [...map.keys()].filter(k => map.get(k).rate != 0);
  let state = { room: 'AA', time: 30, score: 0, opened: new Set() };
  let queue = [state];
  let max = 0;

  while (queue.length) {
    let current = queue.pop();
    if (current.time == 0) {
      continue;
    }
    for (let key of valves) {
      if (!current.opened.has(key) && key != current.room) {
        let dist = map.get(current.room).distances.get(key);
        let time = current.time - dist - 1;
        let newScore = current.score + map.get(key).rate * time;

        max = Math.max(max, newScore);

        if (time > 0) {
          let newOpened = new Set(current.opened);
          newOpened.add(key);
          queue.push({ room: key, time: time, score: newScore, opened: newOpened });
        }
      }
    }
  }

  return max;
}