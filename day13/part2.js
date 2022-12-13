const compare = (left, right) => {
  for (let i = 0; i < left.length && i < right.length; i++) {
    let cmp = 0;
    if (Array.isArray(left[i]) && Array.isArray(right[i])) {
      cmp = compare(left[i], right[i]);
    } else if (Array.isArray(left[i])) {
      cmp = compare(left[i], [right[i]]);
    } else if (Array.isArray(right[i])) {
      cmp = compare([left[i]], right[i]);
    } else {
      cmp = Math.sign(left[i] - right[i]);
    }

    if (cmp != 0) {
      return cmp;
    }
  }

  return Math.sign(left.length - right.length);
}

module.exports = input => {
  let lines = [
    ...input.split(/\r?\n/)
      .filter(c => c.length)
      .map(JSON.parse),
    [[2]],
    [[6]]]
    .sort((a, b) => compare(a, b));

  let i1 = lines.findIndex(v => v.length == 1 && v[0].length == 1 && v[0][0] == 2) + 1;
  let i2 = lines.findIndex(v => v.length == 1 && v[0].length == 1 && v[0][0] == 6) + 1;

  return i1 * i2;
}
