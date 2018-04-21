const fs = require('fs');

const sum = fs.readFileSync('numbers.txt', 'utf8')
  .trim().split('\n')
  .map(x => parseInt(x.slice(0, 11)))
  .reduce((a, b) => a + b)
  .toString().slice(0, 10);

console.log(sum);
