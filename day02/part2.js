module.exports = input =>
  input.split(/\r?\n/)
    .map(r => r.split(' '))
    .map(([o, m]) => [o.charCodeAt(0) - 64, m.charCodeAt(0) - 87])
    .map(([o, m]) => 3 * m - (2 * (o + m + 1)) % 3)
    .reduce((a, b) => a + b);