// You have a function rand7() that generates a random integer from 1 to 7.
// Use it to write a function rand5() that generates a random integer from 1 to 5.

function rand7() {
  return Math.ceil(Math.random() * 7);
}

function rand5() {
  const number = rand7();
  return number <= 5 ? number : rand5();
}

let hashmap = {};
for (let i = 1; i <= 5; i++) {
  hashmap[i] = 0;
}
for (let i = 0; i < 5000000; i++) {
  hashmap[rand5()] ++;
}

console.log(hashmap);
// { '1': 999703,
//   '2': 999889,
//   '3': 1000806,
//   '4': 1000463,
//   '5': 999139 }
