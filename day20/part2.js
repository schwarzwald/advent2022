module.exports = input => {
  let numbers = input.split(/\r?\n/).map(BigInt);

  let ring = new Ring();
  let key = 811589153n;

  let nodes = [];

  for (let value of numbers) {
    nodes.push(ring.add(value * key));
  }

  for (let i = 0; i < 10; i++) {
    for (let value of nodes) {
      ring.move(value);
    }
  }

  let node = ring.map.get(0n).next;
  let arr = [0n];
  while (node.value != 0n) {
    arr.push(node.value);
    node = node.next;
  }

  return arr[1000 % arr.length] + arr[2000 % arr.length] + arr[3000 % arr.length];
}

class Ring {

  constructor() {
    this.map = new Map();
    this.tail = null;
    this.size = 0n;
    this.mod = 1n;
  }

  add(number) {
    let node = new Node(number);
    this.map.set(number, node);

    if (!this.tail) {
      this.tail = node;
    } else {
      if (this.tail.next) {
        this.tail.next.previous = node;
        node.next = this.tail.next;
      }

      this.tail.next = node;
      node.previous = this.tail;

      if (!this.tail.previous) {
        this.tail.previous = node;
        node.next = this.tail;
      }

      this.tail = node;
    }
    this.size++;
    this.mod = this.size - 1n;
    return node;
  }

  move(node) {
    let target = node;
    let offset = ((this.mod + (node.value % this.mod))) % this.mod;

    if (2n * offset < this.size) {
      for (let i = 0n; i < offset; i++) {
        target = target.next;
      }
    } else {
      offset = this.size - offset;
      for (let i = 0n; i < offset; i++) {
        target = target.previous;
      }
    }

    if (node == target) {
      return;
    }

    let next = node.next;
    next.previous = node.previous;
    node.previous.next = next;

    node.previous = target;
    node.next = target.next;
    target.next.previous = node;
    target.next = node;
  }

}

class Node {

  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }

}
