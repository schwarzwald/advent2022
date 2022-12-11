module.exports = input => {
  let lines = input.split(/\r?\n/);
  let monkeys = [];

  for (let i = 0; i < lines.length; i += 7) {
    let op = lines[i + 2].split(': ')[1].split('= ')[1];
    let operation = null;
    if (op.includes('*')) {
      let b = op.split(' * ')[1];
      if (b == 'old') {
        operation = x => x * x;
      } else {
        operation = x => x * b;
      }
    } else {
      let b = op.split(' + ')[1];
      if (b == 'old') {
        operation = x => x + x;
      } else {
        operation = x => x + +b;
      }
    }

    monkeys.push({
      items: lines[i + 1].split(': ')[1].split(',').map(Number),
      operation: operation,
      test: +lines[i + 3].split('by ')[1],
      positive: +lines[i + 4].split('monkey ')[1],
      negative: +lines[i + 5].split('monkey ')[1],
      inspected: 0
    });
  }

  let mod = monkeys.map(m => m.test).reduce((a, b) => a * b);

  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < monkeys.length; j++) {
      let monkey = monkeys[j];
      monkey.inspected += monkey.items.length;

      while (monkey.items.length) {
        let worry = monkey.operation.apply(this, [monkey.items.shift()]) % mod;
        monkeys[worry % monkey.test == 0 ? monkey.positive : monkey.negative].items.push(worry);
      }
    }
  }

  return monkeys.map(m => m.inspected)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a * b);
}
