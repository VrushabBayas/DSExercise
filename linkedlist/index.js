// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let tempHead = this.head;
    while (tempHead) {
      counter += 1;
      tempHead = tempHead.next;
    }
    return counter;
  }
  getFirst() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let tempHead = this.head;
    while (tempHead.next !== null) {
      tempHead = tempHead.next;
    }
    return tempHead;
  }
  clear() {
    delete this.head;
    this.head = null;
  }

  removeFirst() {
    let tempHead = this.head.next;
    delete this.head;
    this.head = tempHead;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let preNode = this.head;
    let node = this.head.next;
    while (node.next) {
      preNode = node;
      node = node.next;
    }
    preNode.next = null;
  }

  insertLast(data) {
    let lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }
  getAt(index) {
    let tempNode = this.head;
    let counter = 0;

    while (tempNode) {
      if (counter === index) {
        return tempNode;
      }
      tempNode = tempNode.next;
      counter += 1;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.insertFirst(data);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(data, previous.next);
    previous.next = newNode;
  }
  forEach(cb) {
    let node = this.head;
    while (node) {
      cb(node);
      node = node.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const l = new LinkedList();
l.insertFirst(1);
l.insertFirst(2);
l.insertFirst(33);
for (let node of l) {
  console.log("node: ", node);
}

module.exports = { Node, LinkedList };
