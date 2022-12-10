module.exports = input => {
  let cycles = input.split(/\r?\n/)
    .reduce((res, line) => line == 'noop' ? [...res, 0] : [...res, 0, +line.split(' ')[1]], []);

  let x = 1;
  let position = 0;
  let result = '';

  for (let dx of cycles) {
    result += (position >= x - 1 && position <= x + 1) ? '#' : '.';
    if (position == 39) {
      result += '\n';
      position = 0;
    } else {
      position++
    }

    x += dx;
  }

  return result;
}