// Methods:
//
// append(value)
// prepend(value)
// size
// head
// tail
// at(index)
// pop
// contains(value)
// find(value)
// toString
//
// Extra Credit:
//
// insertAt(value, index)
// removeAt(value, index)

import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.nodes = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }

    this.nodes++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    }

    this.nodes++;
  }

  size() {
    if (!this.headNode) {
      throw new Error("List is empty.");
    }
    return this.nodes;
  }

  head() {
    if (!this.headNode) {
      throw new Error("List is empty. No nodes to retrieve.");
    }
    return this.headNode;
  }

  tail() {
    if (!this.headNode) {
      throw new Error("List is empty. No nodes to retrieve.");
    }
    return this.tailNode;
  }

  at(index) {
    let currentNode = this.headNode;
    let i = 0;
    while (i != index) {
      currentNode = currentNode.nextNode;
      i++;
    }

    if (!currentNode) {
      throw new Error("Index out of bounds");
    }

    return currentNode;
  }

  pop() {
    if (!this.headNode) {
      throw new Error("List is empty. No nodes to retrieve.");
    }

    if (this.headNode === this.tailNode) {
      const popped = this.headNode;
      this.headNode = null;
      this.tailNode = null;

      return popped;
    }

    let currentNode = this.headNode;
    while (currentNode.nextNode !== this.tailNode) {
      currentNode = currentNode.nextNode;
    }

    const popped = this.tailNode;
    this.tailNode = currentNode;
    this.tailNode.nextNode = null;

    return popped;
  }

  contains(value) {
    if (!this.headNode) {
      throw new Error("List is empty.");
    }

    let currentNode = this.headNode;

    while (currentNode != null) {
      if (currentNode.data != value) {
        currentNode = currentNode.nextNode;
      } else if (currentNode.data === value) {
        return true;
      }
    }

    return false;
  }

  find(value) {
    if (!this.headNode) {
      throw new Error("List is empty.");
    }

    let i = 0;
    let currentNode = this.headNode;

    while (currentNode != null) {
      if (currentNode.data != value) {
        currentNode = currentNode.nextNode;
        i++;
      } else if (currentNode.data === value) {
        return i;
      }
    }

    return null;
  }

  toString() {
    let summary = "";

    let currentNode = this.headNode;

    while (currentNode != null) {
      summary += `( ${currentNode.data} ) -> `;

      currentNode = currentNode.nextNode;
    }

    return (summary += "null");
  }
}
