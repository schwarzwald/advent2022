module.exports = input =>
  input.split(/\r?\n/)
    .map(r => r.split(',')
      .map(p => p.split('-')
        .map(Number)))
    .filter(p => (p[0][0] >= p[1][0] && p[0][1] <= p[1][1]) || (p[1][0] >= p[0][0] && p[1][1] <= p[0][1])).length;