const dist = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

module.exports = (input, y = 2000000) => {
  let data = input.split(/\r?\n/)
    .map(r => /Sensor at x=(-?\d+), y=(-?\d+): closest beacon is at x=(-?\d+), y=(-?\d+)/.exec(r))
    .map(([_, sx, sy, bx, by]) => [[+sx, +sy], [+bx, +by], dist([+sx, +sy], [+bx, +by])]);


  let sections = [];

  for (let [s, , distB] of data) {
    let distY = Math.abs(y - s[1]);
    let distX = distB - distY;

    if (distX > 0) {
      let sx1 = s[0] - distX;
      let sx2 = s[0] + distX;

      let overlapped = sections.filter(([x1, x2]) => x1 <= sx2 + 1 && x2 >= sx1 - 1);

      for (let s of overlapped) {
        sx1 = Math.min(sx1, s[0]);
        sx2 = Math.max(sx2, s[1]);
        sections.splice(sections.indexOf(s), 1);
      }

      sections.push([sx1, sx2]);
    }
  }

  let count = sections.map(([x1, x2]) => Math.abs(x1 - x2)).reduce((a, b) => a + b, 1);
  let beacons = new Set(data.filter(([s, b]) => b[1] == y).map(([s, b]) => b[0]))

  return count - [...beacons].filter(b => sections.some(([x1, x2]) => x1 <= b && x2 >= b)).length;
}
