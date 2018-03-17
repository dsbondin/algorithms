function isPrime(number) {
  if (number % 1 !== 0 || typeof number !== 'number' || number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
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
