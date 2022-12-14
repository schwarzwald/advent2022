module.exports = input => {
  let paths = input.split(/\r?\n/)
    .map(r => r.split(' -> ')
      .map(c => c.split(',')
        .map(Number)));

  let [maxX, maxY] = paths.flatMap(r => r)
    .reduce(([mx, my], [x, y]) => [Math.max(mx, x), Math.max(my, y)], [0, 0]);

  let grid = new Array(maxY + 1);
  for (let i = 0; i < maxY + 1; i++) {
    grid[i] = new Array(maxX + 3);
    grid[i].fill('.');
  }

  for (let path of paths) {
    for (let i = 0; i < path.length - 1; i++) {
      if (path[i][0] == path[i + 1][0]) {
        for (let j = Math.min(path[i][1], path[i + 1][1]); j <= Math.max(path[i][1], path[i + 1][1]); j++) {
          grid[j][path[i][0]] = '#';
        }
      } else {
        for (let j = Math.min(path[i][0], path[i + 1][0]); j <= Math.max(path[i][0], path[i + 1][0]); j++) {
          grid[path[i][1]][j] = '#';
        }
      }
    }
  }

  let [x, y] = [500, 0];
  let count = 0;
  while (y < grid.length - 1) {
    if (grid[y + 1][x] != '#') {
      y++;
    } else if (grid[y + 1][x - 1] != '#') {
      x -= 1;
      y++;
    } else if (grid[y + 1][x + 1] != '#') {
      x += 1;
      y++;
    } else {
      grid[y][x] = '#';
      x = 500;
      y = 0;
      count++;
    }
  }

  return count;
}
