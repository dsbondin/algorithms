function sumEvenFibsBelow(limit) {
  let i = 0, j = 1, sum = 0;
  while (i <= limit || j <= limit) {
    i += j; j += i;
    if (i % 2 === 0) {
      sum += i;
    }
    if (j % 2 === 0) {
      sum += j;
    }
  }
  return sum;
}

sumEvenFibsBelow(4000000)

// 4613732

1 1 2 3 5 8 13 21 34 55 89
