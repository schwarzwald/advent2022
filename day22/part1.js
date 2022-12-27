module.exports = input => {
  let lines = input.split(/\r?\n/);
  let instructionsRaw = lines[lines.length - 1]

  let grid = lines.slice(0, lines.length - 2).map(r => [...r]);
  let maxWidth = Math.max(...grid.map(r => r.length));
  for (let row of grid) {
    if (row.length < maxWidth) {
      let diff = maxWidth - row.length
      for (let i = 0; i < diff; i++) {
        row.push(' ');
      }
    }
  }

  let pos = [grid[0].indexOf('.'), 0];
  let dir = [1, 0];

  let ip = 0;
  let curr = 0;
  let instructions = [];
  while (ip < instructionsRaw.length) {
    if (isNaN(instructionsRaw.charAt(ip))) {
      instructions.push(instructionsRaw.charAt(ip));
      ip++;
      curr = 0;
    } else {
      let num = '';
      while (ip + curr < instructionsRaw.length && !isNaN(instructionsRaw.charAt(ip + curr))) {
        num += instructionsRaw.charAt(ip + curr);
        curr++;
      }
      instructions.push(+num);
      ip += curr;
      curr = 0;
    }
  }


  for (let instr of instructions) {
    if (instr == 'L') {
      dir = [dir[1], -dir[0]];
    } else if (instr == 'R') {
      dir = [-dir[1], dir[0]];
    } else {
      for (let i = 0; i < instr; i++) {
        let [x, y] = [pos[0] + dir[0], pos[1] + dir[1]];
        if (dir[0] < 0) {
          if (x < 0 || grid[y][x] == ' ') {
            for (let j = maxWidth - 1; j >= 0; j--) {
              if (grid[y][j] != ' ') {
                x = j;
                break;
              }
            }
          }
        } else if (dir[0] > 0) {
          if (x > maxWidth - 1 || grid[y][x] == ' ') {
            for (let j = 0; j < maxWidth; j++) {
              if (grid[y][j] != ' ') {
                x = j;
                break;
              }
            }
          }
        } else if (dir[1] < 0) {
          if (y < 0 || grid[y][x] == ' ') {
            for (let j = grid.length - 1; j >= 0; j--) {
              if (grid[j][x] != ' ') {
                y = j;
                break;
              }
            }
          }
        } else if (dir[1] > 0) {
          if (y > grid.length - 1 || grid[y][x] == ' ') {
            for (let j = 0; j < grid.length; j++) {
              if (grid[j][x] != ' ') {
                y = j;
                break;
              }
            }
          }
        }

        if (grid[y][x] == '.') {
          pos = [x, y];
        }
      }
    }
  }
  let dd = 0;
  if (dir[0] == 1) {
    dd = 0;
  } else if (dir[0] == -1) {
    dd = 2;
  } else if (dir[1] == 1) {
    dd = 1;
  } else {
    dd = 3;
  }
  return 1000 * (pos[1] + 1) + 4 * (pos[0] + 1) + dd;
}
