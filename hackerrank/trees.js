const Node = (value) => {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Depth-first Search
const dfs = (root, value) => {
  if (root.data === value) return true;
  if (root.left) dfs(root.left, value);
  if (root.right) dfs(root.right, value);
  return false;
}

// Breadth-first Search
const bfs = (root, value) => {
  let queue = [root];
  while (queue.length !== 0) {
    let node = queue.shift();
    if (node.data === value) return true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push (node.right);
  }
  return false;
}
