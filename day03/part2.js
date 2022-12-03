module.exports = input => {
  let lines = input.split(/\r?\n/);

  let sum = 0;
  for (let i = 0; i < lines.length; i += 3) {
    for (let a of lines[i]) {
      if (lines[i + 1].includes(a) && lines[i + 2].includes(a)) {
        let x = a.charCodeAt(0);
        sum += x < 91 ? x - 38 : x - 96;
        break;
      }

    }
  }
  return sum;
}