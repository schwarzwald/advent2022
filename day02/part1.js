module.exports = input =>
  input.split(/\r?\n/)
    .map(r => r.split(' '))
    .map(([o, m]) => [o.charCodeAt(0) - 64, m.charCodeAt(0) - 87])
    .map(([o, m]) => m + (o == m ? 3 : ((m - o + 2) % 3 == 0) ? 6 : 0))
    .reduce((a, b) => a + b);