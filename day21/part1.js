const eval = (key, map) => {
  let value = map.get(key);
  if (!isNaN(value)) {
    return +value;
  }

  let [first, op, second] = value.split(' ');

  switch (op) {
    case '+': return eval(first, map) + eval(second, map);
    case '-': return eval(first, map) - eval(second, map);
    case '*': return eval(first, map) * eval(second, map);
    case '/': return eval(first, map) / eval(second, map);
  }
}

module.exports = input => {
  return eval('root', input.split(/\r?\n/)
    .map(r => r.split(': '))
    .reduce((map, [key, value]) => map.set(key, value), new Map()));
}