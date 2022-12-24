const gcd = (a, b) => a >= b ? (a % b == 0 ? b : gcd(b, a % b)) : gcd(b, a);
const lcm = (a, b) => a * b / gcd(a, b);
const coords = (x, y) => `${x}#${y}`;

module.exports = input => {
  let lines = input.split(/\r?\n/);
  let blizards = [];

  let width = lines[0].length - 2;
  let height = lines.length - 2;
  let period = lcm(width, height);

  for (let y = 0; y < lines.length - 1; y++) {
    for (let x = 0; x < lines[y].length - 1; x++) {
      switch (lines[y + 1].charAt(x + 1)) {
        case '<': blizards.push({ x: x, y: y, dir: [width - 1, 0] }); break;
        case '>': blizards.push({ x: x, y: y, dir: [1, 0] }); break;
        case '^': blizards.push({ x: x, y: y, dir: [0, height - 1] }); break;
        case 'v': blizards.push({ x: x, y: y, dir: [0, 1] }); break;
      }
    }
  }

  let timeline = new Map();
  let queue = [[0, -1, 0]];
  let visited = new Set();

  while (queue.length) {
    let [x, y, time] = queue.shift();

    let id = `${x}#${y}#${time % period}`;
    if (visited.has(id)) {
      continue;
    }
    visited.add(id);

    let next = timeline.get((time + 1) % period);
    if (!next) {
      next = new Set();
      for (let blizard of blizards) {
        next.add(coords(
          (blizard.x + blizard.dir[0] * (time + 1)) % width,
          (blizard.y + blizard.dir[1] * (time + 1)) % height));
      }
      timeline.set((time + 1) % period, next);
    }


    for (let [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1], [0, 0]]) {
      if (x + dx == width - 1 && y + dy == height) {
        return time + 1;
      }

      if (next.has(coords(x + dx, y + dy))) {
        continue;
      }

      if (x + dx < 0 || x + dx >= width || y + dy < 0 || y + dy >= height) {
        if (x + dx != 0 || y + dy != -1) {
          continue;
        }
      }

      queue.push([x + dx, y + dy, time + 1]);
    }
  }
}
