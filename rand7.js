// You have a function rand5() that generates a random integer from 1 to 5.
// Use it to write a function rand7() that generates a random integer from 1 to 7.

// given rand5()
function rand5() {
  return Math.ceil(Math.random() * 5)
}

// solution
function rand7() {
  // generate random number from 1 to 25
  const roll1 = rand5() - 1;
  const roll2 = rand5();
  const combo = roll1 * 5 + roll2;

  return combo <= 21 ? combo % 7 + 1 : rand7();
}

// validation
let hashmap = {};
for (let i = 1; i <= 7; i++) {
  hashmap[i] = 0;
}
for (let i = 0; i < 7000000; i++) {
  hashmap[rand7()] ++;
}

console.log(hashmap);
// { '1': 1001068,
//   '2': 999361,
//   '3': 999298,
//   '4': 1000653,
//   '5': 999847,
//   '6': 999564,
//   '7': 1000209 }
