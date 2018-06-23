// Return the first 10 digits of the sum of 100 numbers like these:

// 37107287533902102798797998220837590246510135740250
// 46376937677490009712648124896970078050417018260538

const fs = require('fs');

const sum = fs.readFileSync('numbers.txt', 'utf8')
  .trim().split('\n')
  .map(x => parseInt(x.slice(0, 11)))
  .reduce((a, b) => a + b)
  .toString().slice(0, 10);

console.log(sum);
