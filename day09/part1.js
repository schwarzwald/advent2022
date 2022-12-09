module.exports = input => {
  let directions = input.split(/\r?\n/)
    .map(r => r.split(' '))
    .map(([d, c]) => [d, +c]);

  let hx = 0;
  let hy = 0;
  let tx = 0;
  let ty = 0;

  let positions = new Set([`${tx}#${ty}`]);

  for (let [dir, count] of directions) {
    for (let i = 0; i < count; i++) {
      switch (dir) {
        case 'U': hy -= 1; break;
        case 'D': hy += 1; break;
        case 'L': hx -= 1; break;
        case 'R': hx += 1; break;
      }

      if (Math.abs(hx - tx) > 1 || Math.abs(hy - ty) > 1) {
        tx += Math.sign(hx - tx);
        ty += Math.sign(hy - ty);
      }

      positions.add(`${tx}#${ty}`);
    }
  }

  return positions.size;
}