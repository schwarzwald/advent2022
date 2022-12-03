module.exports = input =>
  input.split(/\r?\n/)
    .map(b => [b.substring(0, b.length / 2), b.substring(b.length / 2)])
    .map(([a, b]) => [...a].filter(x => b.includes(x))[0].charCodeAt(0))
    .map(a => a < 91 ? a - 38 : a - 96)
    .reduce((a, b) => a + b); 