const UP = [[1, 0, 0], [0, 0, 1], [0, -1, 0]];
const DOWN = [[1, 0, 0], [0, 0, -1], [0, 1, 0]];
const LEFT = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]];
const RIGHT = [[0, 0, -1], [0, 1, 0], [1, 0, 0]];

const rotate = (cube, rot) => {
  let rotated = new Map();

  for (let key of cube.keys()) {
    let { value, x, y, z, px, py } = cube.get(key);
    let [cx, cy, cz] = mul([x, y, z], rot);

    rotated.set(coords(cx, cy, cz), {
      value: value,
      x: cx,
      y: cy,
      z: cz,
      px: px,
      py: py
    });
  }
  return rotated;
}

const mul = (vec3, mat3) => {
  return [
    vec3[0] * mat3[0][0] + vec3[1] * mat3[1][0] + vec3[2] * mat3[2][0],
    vec3[0] * mat3[0][1] + vec3[1] * mat3[1][1] + vec3[2] * mat3[2][1],
    vec3[0] * mat3[0][2] + vec3[1] * mat3[1][2] + vec3[2] * mat3[2][2]];
}

const coords = (x, y, z) => `${x}#${y}#${z}`;

const get = (cube, size, fx, fy) => {
  let offset = 0.5;
  let half = size / 2 + offset;

  let cx = fx - (half - 1);
  let cy = fy - (half - 1);
  let cz = half;

  return cube.get(coords(cx, cy, cz));
}

const eq = (s1, s2) => {
  for (let dy = 0; dy < s1.length; dy++) {
    for (let dx = 0; dx < s1.length; dx++) {
      if (s1[dy][dx] != s2[dy][dx]) {
        return false;
      }
    }
  }
  return true;
}

const rotLeft = side => {
  let res = new Array(side.length);
  for (let dy = 0; dy < side.length; dy++) {
    res[dy] = new Array(side.length);

    for (let dx = 0; dx < side.length; dx++) {
      res[dy][dx] = side[dx][side.length - 1 - dy];
    }
  }
  return res;
}

module.exports = input => {
  let lines = input.split(/\r?\n/);
  let instructionsRaw = lines[lines.length - 1]

  let size = lines.length > 50 ? 50 : 4;
  let offset = size % 2 == 0 ? 0.5 : 0;
  let half = size / 2 + offset;

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

  let cube = new Map();

  let pos = [grid[0].indexOf('.'), 0];
  let dir = [1, 0, 0];

  let x = pos[0];
  let y = 0;

  let stack = [{ r: 0, p: [x, y] }];
  let queue = [[pos, null, stack]];
  while (queue.length) {
    let [[px, py], prev, mid] = queue.pop();

    if (prev != RIGHT && px + size < maxWidth && grid[py][px + size] != ' ') {
      let m = [];
      mid.push({ r: LEFT, p: [px + size, py] });
      mid.push(m);
      mid.push({ r: RIGHT });
      queue.push([[px + size, py], LEFT, m]);
    }

    if (prev != LEFT && px - size >= 0 && grid[py][px - size] != ' ') {
      let m = [];
      mid.push({ r: RIGHT, p: [px - size, py] });
      mid.push(m);
      mid.push({ r: LEFT });
      queue.push([[px - size, py], RIGHT, m]);
    }

    if (prev != DOWN && py + size < grid.length && grid[py + size][px] != ' ') {
      let m = [];
      mid.push({ r: UP, p: [px, py + size] });
      mid.push(m);
      mid.push({ r: DOWN });
      queue.push([[px, py + size], UP, m]);
    }

    if (prev != UP && py - size >= 0 && grid[py - size][px] != ' ') {
      let m = [];
      mid.push({ r: DOWN, p: [px, py - size] });
      mid.push(m);
      mid.push({ r: UP });
      queue.push([[px, py - size], DOWN, m]);
    }
  }

  const flat = list => Array.isArray(list) ? list.reduce((res, a) => [...res, ...flat(a)], []) : [list];
  let rots = flat(stack);

  while (rots.length) {
    let r = rots.shift();
    if (r.r) {
      cube = rotate(cube, r.r);
    }

    if (r.p == null) {
      continue;
    }

    let [x, y] = r.p;

    for (let dy = 0; dy < size; dy++) {
      for (let dx = 0; dx < size; dx++) {
        let cx = dx - (half - 1);
        let cy = dy - (half - 1);
        let cz = half;

        cube.set(coords(cx, cy, cz), {
          value: grid[y + dy][x + dx],
          x: cx,
          y: cy,
          z: cz,
          px: x + dx,
          py: y + dy
        });
      }
    }
  }

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

  pos = [0, 0];

  for (let instr of instructions) {
    if (instr == 'L') {
      dir = [dir[1], -dir[0]];
    } else if (instr == 'R') {
      dir = [-dir[1], dir[0]];
    } else {
      for (let i = 0; i < instr; i++) {
        let rotated = cube;
        let [x, y] = [pos[0] + dir[0], pos[1] + dir[1]];
        if (dir[0] < 0) {
          if (x < 0) {
            rotated = rotate(cube, RIGHT);
            x = size - 1;
          }
        } else if (dir[0] > 0) {
          if (x > size - 1) {
            rotated = rotate(cube, LEFT);
            x = 0;
          }
        } else if (dir[1] < 0) {
          if (y < 0) {
            y = size - 1;
            rotated = rotate(cube, DOWN);
          }
        } else if (dir[1] > 0) {
          if (y > size - 1) {
            y = 0;
            rotated = rotate(cube, UP);
          }
        }

        if (get(rotated, size, x, y).value == '.') {
          pos = [x, y];
          cube = rotated;
        } else {
          break;
        }
      }
    }
  }
  let val = get(cube, size, pos[0], pos[1]);
  pos = [val.px, val.py];

  let sx = Math.floor(val.px / size) * size;
  let sy = Math.floor(val.py / size) * size;

  let side1 = [];
  let side2 = [];
  for (let dy = 0; dy < size; dy++) {
    side1.push([]);
    side2.push([]);
    for (let dx = 0; dx < size; dx++) {
      side1[dy].push(grid[sy + dy][sx + dx]);
      side2[dy].push(get(cube, size, dx, dy).value);
    }
  }

  while (!eq(side1, side2)) {
    side2 = rotLeft(side2);
    dir = [dir[1], -dir[0]];
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
