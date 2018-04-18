function isPrime(number) {
  if (typeof number !== 'number' || number % 1 !== 0 || number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  const squareRoot = Math.sqrt(number);
  for (let i = 3; i <= squareRoot; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
