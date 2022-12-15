const dist = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const getSections = (data, y) => {
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

  return sections;
}

module.exports = (input, maxY = 4000000) => {
  let data = input.split(/\r?\n/)
    .map(r => /Sensor at x=(-?\d+), y=(-?\d+): closest beacon is at x=(-?\d+), y=(-?\d+)/.exec(r))
    .map(([_, sx, sy, bx, by]) => [[+sx, +sy], [+bx, +by], dist([+sx, +sy], [+bx, +by])]);

  for (let y = 0; y <= maxY; y++) {
    let sections = getSections(data, y)

    if (sections.length == 2) {
      return (Math.min(sections[0][1], sections[1][1]) + 1) * 4000000 + y;
    }
  }
}