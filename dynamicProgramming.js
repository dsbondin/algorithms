function fib(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(48)); // 2971215073 - 38 seconds to run
// console.log(fib(45)); // 701408733 - 9 seconds
console.log(fib(42)); // 63245986 - 1 second

let fibsArray = [];

function dynamicFib(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  let fib = dynamicFib(n - 1) + (fibsArray[n - 2] || dynamicFib(n - 2));
  fibsArray[n] = fib;
  return fib;
}

console.log(dynamicFib(100))
