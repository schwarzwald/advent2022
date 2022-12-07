module.exports = input => {
  let lines = input.split(/\r?\n/);

  let root = new File(true, '/');
  let current = null;

  for (let line of lines) {
    if (line.startsWith('$')) {
      if (line.startsWith('$ cd')) {
        let name = line.split(' ')[2];
        if (name == '/') {
          current = root;
        } else if (name == '..') {
          current = current.parent;
        } else {
          current = current.children.find(c => c.name == name);
        }
      }
    } else {
      let [first, second] = line.split(' ');
      current.addChild(first == 'dir' ? new File(second, true) : new File(second, false, +first));
    }
  }

  let queue = [root];
  let sum = 0;

  while (queue.length) {
    let file = queue.shift();
    let size = file.getSize();

    if (file.dir && size <= 100000) {
      sum += file.getSize();
    }
    queue.push(...file.children);
  }

  return sum;
}

class File {
  constructor(name, dir, size) {
    this.name = name;
    this.dir = dir;
    this.size = size;
    this.parent = null;
    this.children = [];
  }

  getSize() {
    if (this.dir) {
      return this.children.reduce((sum, a) => sum + a.getSize(), 0);
    } else {
      return this.size;
    }
  }

  addChild(file) {
    this.children.push(file);
    file.parent = this;
  }
}
