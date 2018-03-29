// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(number) {
  const squareRoot = Math.sqrt(number);
  for (let i = 3; i <= squareRoot; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function nthPrime(number) {
  let counter = 6, prime = 13;
  while (counter < number) {
    prime += 2;
    if (isPrime(prime)) {
      counter++;
    }
  }
  return prime;
}

nthPrime(10001)
// => 104743
