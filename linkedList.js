// implement linked list in js

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

let z = new Node("z", null)
let y = new Node("y", z)
let x = new Node("z", y)
x.next.next.value
// 'z'
