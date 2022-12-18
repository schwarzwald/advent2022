module.exports = input => {
  let cubes = input.split(/\r?\n/)
    .map(r => r.split(',')
      .map(Number));

  let area = 0;
  for (let [x, y, z] of cubes) {
    for (let [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) {
      if (!cubes.some(([x2, y2, z2]) => x2 == x + dx && y2 == y + dy && z2 == z + dz)) {
        area++;
      }
    }
  }
  return area;
}
