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
  let lines = input.split(/\r?\n/);
  let sum = 0;

  for (let i = 0; i < lines.length; i += 3) {
    let left = JSON.parse(lines[i]);
    let right = JSON.parse(lines[i + 1]);

    if (compare(left, right) < 0) {
      sum += (i / 3) + 1;
    }
  }

  return sum;
}
