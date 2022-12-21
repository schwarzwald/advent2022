const OPERATORS = ['/', '*', '-', '+'];

const compute = (left, right, op) => {
  switch (op) {
    case '+': return left + right;
    case '-': return left - right;
    case '*': return left * right;
    case '/': return left / right;
  }
}

const eval = (key, map) => {
  if (key == 'humn' || map.get(key) == 'humn') {
    return 'humn';
  }

  let value = map.get(key);
  if (!isNaN(value)) {
    return +value;
  }

  let [first, op, second] = value.split(' ');
  let left = eval(first, map);
  let right = eval(second, map);

  return map.set(key, isNaN(left) || isNaN(right) ? `(${left} ${op} ${right})` : compute(left, right, op)).get(key);
}

const undo = (left, value, op, [nom, den]) => {
  switch (op) {
    case '+': return [nom - (value * den), den];
    case '-': return left ? [-(nom + -(value * den)), den] : [nom + (value * den), den];
    case '*': return [nom, den * value];
    case '/': return left ? [den * value, nom] : [nom * value, den];
  }
}

const findOperatorIndex = exp => {
  let index = 0;
  let depth = 0;
  for (let c of [...exp]) {
    if (OPERATORS.includes(c) && depth == 0) {
      return index;
    }

    if (c == '(') {
      depth++;
    } else if (c == ')') {
      depth--;
    }

    index++;
  }
}

const solve = (exp, result) => {
  if (exp == 'humn') {
    return result[0] / result[1];
  }

  exp = exp.substring(1, exp.length - 1);

  let index = findOperatorIndex(exp);
  let op = exp.charAt(index);
  let left = exp.substring(0, index - 1);
  let right = exp.substring(index + 2, exp.length);

  return isNaN(left) ? solve(left, undo(false, +right, op, result)) : solve(right, undo(true, +left, op, result));
}

module.exports = input => {
  let map = input.split(/\r?\n/)
    .map(r => r.split(': '))
    .reduce((map, [key, value]) => map.set(key, value), new Map());
  map.set('root', map.get('root').replace(/[\+\-\*\/]/, '='));

  let exp = eval('root', map);
  let [left, right] = exp.substring(1, exp.length - 1).split(' = ')
  return isNaN(left) ? solve(left, [+right, 1]) : solve(right, [+left, 1]);
}
