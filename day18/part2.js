module.exports = input => {
  let cubes = input.split(/\r?\n/)
    .map(r => r.split(',')
      .map(Number));

  let area = 0;
  let bounds = [
    [Number.MAX_VALUE, Number.MIN_VALUE],
    [Number.MAX_VALUE, Number.MIN_VALUE],
    [Number.MAX_VALUE, Number.MIN_VALUE]];

  for (let [x, y, z] of cubes) {
    bounds[0][0] = Math.min(x - 1, bounds[0][0]);
    bounds[0][1] = Math.max(x + 1, bounds[0][1]);

    bounds[1][0] = Math.min(y - 1, bounds[1][0]);
    bounds[1][1] = Math.max(y + 1, bounds[1][1]);

    bounds[2][0] = Math.min(z - 1, bounds[2][0]);
    bounds[2][1] = Math.max(z + 1, bounds[2][1]);
  }

  let directions = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];

  let queue = [[bounds[0][0], bounds[1][0], bounds[2][0]]];
  let visited = new Set();

  while (queue.length) {
    let [cx, cy, cz] = queue.shift();
    let id = `${cx}#${cy}#${cz}`;

    if (visited.has(id)) {
      continue;
    }

    visited.add(id);

    if (bounds[0][0] > cx || bounds[0][1] < cx
      || bounds[1][0] > cy || bounds[1][1] < cy
      || bounds[2][0] > cz || bounds[2][1] < cz) {
      continue;
    }

    for (let [dx2, dy2, dz2] of directions) {
      let nx = cx + dx2;
      let ny = cy + dy2;
      let nz = cz + dz2;
      if (cubes.some(([x2, y2, z2]) => x2 == nx && y2 == ny && z2 == nz)) {
        area++;
      } else {
        queue.push([nx, ny, nz]);
      }
    }
  }

  return area;
}