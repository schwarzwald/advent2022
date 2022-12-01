module.exports = input =>
  input.split(/\r?\n\r?\n/)
    .map(g => g.split(/\r?\n/)
      .map(Number)
      .reduce((a, b) => a + b))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b);
