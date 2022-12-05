module.exports = input => {
  let lines = input.split(/\r?\n/);
  let index = lines.findIndex(e => e.length == 0);

  let state = lines.slice(0, index - 1);
  let instructions = lines.slice(index + 1);
  let count = lines[index - 1].split('   ').length;

  let stacks = [];
  for (let i = 0; i < count; i++) {
    stacks.push([]);

    for (let j = state.length - 1; j >= 0; j--) {
      let c = state[j][i * 4 + 1]
      if (c != ' ') {
        stacks[i].push(c);
      }
    }
  }

  for (let instr of instructions) {
    let [size, from, to] = /move (\d+) from (\d+) to (\d+)/.exec(instr).slice(1).map(Number);

    for (let i = 0; i < size; i++) {
      stacks[to - 1].push(stacks[from - 1].pop());
    }
  }

  return stacks.map(s => s[s.length - 1]).join('');
}
