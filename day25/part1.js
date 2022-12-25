module.exports = input => {
  const digits = new Map([['0', 0], ['1', 1], ['2', 2], ['-', -1], ['=', -2]])

  let sum = input.split(/\r?\n/)
    .reduce((sum, snafu) =>
      [...snafu].reverse()
        .reduce(([a, base], char) => [a + base * digits.get(char), base * 5], [sum, 1])[0], 0);

  let result = '';
  while (sum > 0) {
    let rem = sum % 5;
    if (rem == 3) {
      result = '=' + result;
      sum += 2;
    } else if (rem == 4) {
      result = '-' + result;
      sum += 1;
    } else {
      result = rem + result;
    }
    sum = Math.floor(sum / 5);
  }

  return result;
}