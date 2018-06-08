function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let root = new Node(7);
root.left = new Node(5);
root.right = new Node(9);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.left = new Node(8);
root.right.right = new Node(10);

const treeWidth = (root) => {
  let widths = [0];
  let queue = [root];
  while (queue.length !== 0) {
    let l = queue.length;
    widths.push(l);
    for (let i = 0; i < l; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return widths;
}

console.log(treeWidth(root));
