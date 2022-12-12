module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split(''));

  let start = [];
  let end = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      let c = grid[y][x];
      if (c == 'S') {
        grid[y][x] = 0;
        start = [x, y];
      } else if (c == 'E') {
        grid[y][x] = 25;
        end = [x, y];
      } else {
        grid[y][x] = c.charCodeAt(0) - 97;
      }
    }
  }

  let queue = [[start, 0]];
  let visited = new Set();
  while (queue.length) {
    let [[x, y], dist] = queue.shift();
    let id = `${x}#${y}`;

    if (visited.has(id)) {
      continue;
    }

    visited.add(id);

    if (x == end[0] && y == end[1]) {
      return dist;
    }

    for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      if (x + dx < 0 || x + dx > grid[0].length - 1 || y + dy < 0 || y + dy > grid.length - 1) {
        continue;
      }

      if (grid[y + dy][x + dx] - grid[y][x] <= 1) {
        queue.push([[x + dx, y + dy], dist + 1]);
      }
    }
  }

  return 0;
}
