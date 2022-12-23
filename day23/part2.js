const coords = (x, y) => `${x}#${y}`;

const area = map => {
  let minX = 1000;
  let maxX = -1000;
  let minY = 1000;
  let maxY = -1000;

  for (let key of map.keys()) {
    let { x, y } = map.get(key);
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  return (maxX - minX + 1) * (maxY - minY + 1);
}

module.exports = input => {
  let lines = input.split(/\r?\n/);
  let map = new Map();
  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] == '#') {
        map.set(coords(x, y), { x: x, y: y });
      }
    }
  }

  let checks = [
    [[-1, -1], [0, -1], [1, -1]], //N
    [[-1, 1], [0, 1], [1, 1]], //S
    [[-1, -1], [-1, 0], [-1, 1]], //W
    [[1, -1], [1, 0], [1, 1]], //E
  ]

  for (let round = 1; ; round++) {
    let potentials = new Map();

    for (let elf of map.values()) {
      let adjacent = [
        [elf.x - 1, elf.y - 1], [elf.x, elf.y - 1], [elf.x + 1, elf.y - 1],
        [elf.x - 1, elf.y], [elf.x + 1, elf.y],
        [elf.x - 1, elf.y + 1], [elf.x, elf.y + 1], [elf.x + 1, elf.y + 1]
      ];

      if (!adjacent.some(([ax, ay]) => map.get(coords(ax, ay)))) {
        continue;
      }

      for (let check of checks) {
        if (!check.some(([dx, dy]) => map.get(coords(elf.x + dx, elf.y + dy)))) {
          let [dx, dy] = check[1];
          let coord = coords(elf.x + dx, elf.y + dy);
          potentials.set(coord, (potentials.get(coord) || 0) + 1);
          elf.potential = [elf.x + dx, elf.y + dy];
          break;
        }
      }
    }

    if (potentials.size == 0 || [...potentials.values()].every(v => v > 1)) {
      return round;
    }

    let next = new Map();
    for (let elf of map.values()) {
      if (elf.potential) {
        let [px, py] = elf.potential;
        if (potentials.get(coords(px, py)) == 1) {
          next.set(coords(px, py), { x: px, y: py });
          continue;
        }
      }

      next.set(coords(elf.x, elf.y), { x: elf.x, y: elf.y });
    }
    map = next;
    checks.push(checks.shift());
  }
}