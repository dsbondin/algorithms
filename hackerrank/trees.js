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
    if (node.right) queue.push (node.right);
  }
  return false;
}

let root = new Node(3);
root.left = new Node(5);
root.right = new Node(7);
root.left.left = new Node(9);
root.left.right = new Node(11);
root.right.left = new Node(13);
root.right.right = new Node(15);

console.log('dfs 11: ', dfs(root, 11));
console.log('bfs 11: ', bfs(root, 11));
console.log('dfs 12: ', dfs(root, 12));
console.log('bfs 12: ', bfs(root, 12));
