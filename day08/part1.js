module.exports = input => {
  let grid = input.split(/\r?\n/)
    .map(r => r.split('')
      .map(Number));

  let width = grid[0].length;
  let height = grid.length;
  let count = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      for (let [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
        let visible = true;
        let x = j;
        let y = i;

        while (x > 0 && x < width - 1 && y > 0 && y < height - 1) {
          x += dx;
          y += dy;

          if (grid[y][x] >= grid[i][j]) {
            visible = false;
            break;
          }
        }

        if (visible) {
          count++;
          break;
        }
      }
    }
  }

  return count;
}
