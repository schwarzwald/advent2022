module.exports = input => {
  let numbers = input.split(/\r?\n/).map(Number);

  let ring = new Ring();
  let nodes = [];

  for (let value of numbers) {
    nodes.push(ring.add(value));
  }

  for (let value of nodes) {
    ring.move(value);
  }

  let node = ring.map.get(0).next;
  let arr = [0];
  while (node.value != 0) {
    arr.push(node.value);
    node = node.next;
  }

  return arr[1000 % arr.length] + arr[2000 % arr.length] + arr[3000 % arr.length];
}

class Ring {

  constructor() {
    this.map = new Map();
    this.tail = null;
    this.size = 0;
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
    return node;
  }

  move(node) {
    let target = node;
    let offset = (2 * (this.size - 1) + node.value) % (this.size - 1);

    for (let i = 0; i < offset; i++) {
      target = target.next;
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
