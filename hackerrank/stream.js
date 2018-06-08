// There are two streams of integers that should be captured and stored in
// the order they come in. Implement a way to retrieve the n most recent
// integers stored.

function Node(data) {
  this.data = data;
  this.next = null;
}

Node.prototype.mostRecent = function(n) {
  let output = '';
  node = this;
  while (n > 0 && node) {
    output += node.data + ' ';
    node = node.next;
    n--;
  }
  console.log(output);
}

let head = null;

function addNode(data) {
  let node = new Node(data);
  node.next = head;
  head = node;
}

for (let i = 10; i > 0; i--) {
  addNode(i);
}

head.mostRecent(5);
head.mostRecent(9);
