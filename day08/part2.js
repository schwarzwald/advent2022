module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split('')
      .map(Number));

  let width = grid[0].length;
  let height = grid.length;
  let max = 0;

  for (let i = 1; i < height - 1; i++) {
    for (let j = 1; j < width - 1; j++) {
      let score = 1;

      for (let [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
        let visible = 1;
        let x = j + dx;
        let y = i + dy;

        while (x > 0 && x < width - 1 && y > 0 && y < height - 1 && grid[y][x] < grid[i][j]) {
          x += dx;
          y += dy;
          visible++;
        }

        score *= visible;
      }

      max = Math.max(max, score);
    }
  }

  return max;
}
