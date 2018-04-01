// Find longest sequence of zeros in binary representation of an integer.

function binaryGap(number) {
  if (typeof number !== 'number' || number % 1 !== 0) {
    return false
  }

  const binary = number.toString(2);
  console.log(binary)
  let maxCount = 0, count = 0

  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === '0') {
      count++;
      if (count > maxCount) {
        maxCount = count
      }
    }
    if (binary[i] === '1') {
      count = 0;
    }
  }
  return maxCount
}

binaryGap(1025)
// 9
