// The sum of the squares of the first ten natural numbers is,

// 1 + 4 + 9 ... + 100 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10) ** 2 = 55 ** 2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// SOLUTION:
// this equation equals 2ab + 2ac + 2ad + ... + 2bc + 2bd + ... and is solved easily with a loop within a loop:

function sumSquareDifference(limit) {
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    for (let j = i + 1; j <= limit; j++) {
      sum += i * j;
    }
  }
  return sum * 2;
}

sumSquareDifference(100)
// => 25164150
