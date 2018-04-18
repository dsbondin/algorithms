// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
  if (number % 1 !== 0 || typeof number !== 'number') {
    return false;
  }
  let factor;

  for (let i = 3; i < number/3; i += 2) {
    if (number % i === 0) {
      factor = number / i;
      if (isPrime(factor)) {
        return factor;
      }
    }
  }

  return false;
}

function isPrime(num) {
  const square = Math.sqrt(num);
  for (let j = 3; j < square; j += 2) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
}

console.log(largestPrimeFactor(600851475143))
