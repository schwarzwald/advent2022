module.exports = input => {
  let cycles = input.split(/\r?\n/)
    .reduce((res, line) => line == 'noop' ? [...res, 0] : [...res, 0, +line.split(' ')[1]], []);

  let x = 1;
  let sum = 0;

  for (let cycle = 1; cycle <= cycles.length; cycle++) {
    if (cycle % 40 == 20) {
      sum += cycle * x;
    }

    x += cycles[cycle - 1];
  }

  return sum;
}
