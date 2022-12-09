module.exports = input => {
  const SIZE = 10;

  let directions = input.split(/\r?\n/)
    .map(r => r.split(' '))
    .map(([d, c]) => [d, +c]);

  let knots = [];
  for (let i = 0; i < SIZE; i++) {
    knots.push([0, 0]);
  }

  let positions = new Set([`${knots[SIZE - 1][0]}#${knots[SIZE - 1][1]}`]);

  for (let [dir, count] of directions) {
    for (let i = 0; i < count; i++) {
      switch (dir) {
        case 'U': knots[0][1] -= 1; break;
        case 'D': knots[0][1] += 1; break;
        case 'L': knots[0][0] -= 1; break;
        case 'R': knots[0][0] += 1; break;
      }

      for (let j = 1; j < SIZE; j++) {
        let [hx, hy] = knots[j - 1];
        let [tx, ty] = knots[j];

        if (Math.abs(hx - tx) > 1 || Math.abs(hy - ty) > 1) {
          knots[j][0] += Math.sign(hx - tx);
          knots[j][1] += Math.sign(hy - ty);
        }
      }

      positions.add(`${knots[SIZE - 1][0]}#${knots[SIZE - 1][1]}`);
    }
  }

  return positions.size;
}