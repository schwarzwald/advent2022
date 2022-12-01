module.exports = input =>
  Math.max(...input.split(/\r?\n\r?\n/)
    .map(g => g.split(/\r?\n/)
      .map(Number)
      .reduce((a, b) => a + b)));