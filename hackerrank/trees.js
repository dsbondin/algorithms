function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Depth-first Search
const dfs = (root, value) => {
  if (root.data === value) return true;
  if (root.left || root.right) {
    return dfs(root.left, value) || dfs(root.right, value);
  }
  return false;
}

// Breadth-first Search
const bfs = (root, value) => {
  let queue = [root];
  while (queue.length !== 0) {
    let node = queue.shift();
    if (node.data === value) return true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
}

const validateBST = (root) => {
  const helper = (node, min, max) => {
    if (!node) {
      return true;
    }
    if (node.data < min || node.data > max) {
      return false;
    }
    return helper(node.left, min, node.data) && helper(node.right, node.data, max)
  }

  return helper(root, -Infinity, Infinity);
}

let root = new Node(7);
root.left = new Node(5);
root.right = new Node(9);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.left = new Node(8);
root.right.right = new Node(10);

console.log(validateBST(root));
