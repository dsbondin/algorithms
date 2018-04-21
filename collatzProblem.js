function bringToOne(number) {
  let steps = 0;
  while (number !== 1) {
    if (number % 2 === 0) {
      steps++;
      number = number / 2;
    } else {
      steps++;
      number = number * 3 + 1;
    }
  }
  return steps;
}

let maxChain = 0;
let maxChainNumber = 999999;

for (let i = 999999; i > 0; i--) {
  if (bringToOne(i) > maxChain) {
    maxChain = bringToOne(i);
    maxChainNumber = i;
  }
}

console.log(maxChainNumber)
