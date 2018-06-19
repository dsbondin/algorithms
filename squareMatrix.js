// Traverse the square matrix of size n in a spiral fashion and return the last element

function matrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) matrix.push([]);
  for (let i = 0; i < n ; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i * n + j + 1;
    }
  }


  while (matrix.length) {
    if (matrix.length === 1) return matrix[0][0];
    matrix.shift();
    if (matrix.length === 1) return matrix[0][0];
    if (matrix.length) matrix.forEach(el => el.pop());
    if (matrix.length) matrix.pop();
    if (matrix.length) matrix.forEach(el => el.shift());
  }
}

matrix(7);
