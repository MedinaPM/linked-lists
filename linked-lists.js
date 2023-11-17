/* eslint-disable max-classes-per-file */
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size += 1;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.nextNode;
      count += 1;
    }
    return current;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let previous = null;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    this.tail = previous;
    this.size -= 1;
    return current;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index += 1;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    if (index === 0) {
      this.prepend(value);
      return true;
    }
    if (index === this.size) {
      this.append(value);
      return true;
    }
    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.nextNode;
      count += 1;
    }
    newNode.nextNode = current;
    previous.nextNode = newNode;
    this.size += 1;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      const removed = this.head;
      this.head = this.head.nextNode;
      this.size -= 1;
      return removed;
    }
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.nextNode;
      count += 1;
    }
    previous.nextNode = current.nextNode;
    if (index === this.size - 1) {
      this.tail = previous;
    }
    this.size -= 1;
    return current;
  }
}

// Example usage:
const list = new LinkedList();
list.append(5);
list.append(10);
list.prepend(1);
console.log(list.toString()); // Output: (1) -> (5) -> (10) -> null

list.insertAt(7, 2);
console.log(list.toString()); // Output: (1) -> (5) -> (7) -> (10) -> null

list.removeAt(1);
console.log(list.toString()); // Output: (1) -> (7) -> (10) -> null

console.log(list.contains(7)); // Output: true
console.log(list.find(10)); // Output: 2