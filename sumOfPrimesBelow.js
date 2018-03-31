// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function sumOfPrimesBelow(number) {
  let sum = 2;
  for (let i = 3; i < number; i += 2) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  let square = Math.sqrt(num);
  for (let i = 3; i <= square; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

sumOfPrimesBelow(2000000)
// => 142913828922
