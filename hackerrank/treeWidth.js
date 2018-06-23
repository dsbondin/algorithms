function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// return binary tree width at each level

const treeWidth = (root) => {
  // width at level 0 is 0 (root is level 1)
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

const maxTreeWidth = (root) => {
  let maxWidth = 0;
  let queue = [root];
  while (queue.length !== 0) {
    let l = queue.length;
    maxWidth = Math.max(maxWidth, l);
    for (let i = 0; i < l; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return maxWidth;
}

const leftNodes = (root) => {
  let lNodes = [];
  let queue = [root];
  while (queue.length !== 0) {
    lNodes.push(queue[0].data);
    let l = queue.length;
    for (let i = 0; i < l; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return lNodes;
}

let root = new Node(7);
root.left = new Node(5);
root.right = new Node(9);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.left = new Node(8);
root.right.right = new Node(10);
root.right.right.right = new Node(12);
root.right.right.left = new Node(15);

console.log(treeWidth(root));
console.log(maxTreeWidth(root));
console.log(leftNodes(root));
