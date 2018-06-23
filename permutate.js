function permutate(array) {
  let result = [];

  function helper(arr, m = []) {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let rest = arr.slice(); // copy arr without mutating
        let curr = rest.splice(i, 1); // next is th i-th element, curr is the rest
        helper(rest, m.concat(curr))
     }
   }
 }

 helper(array);
 return result;
}

// not working yet
function kthPermutation(arr, k, m = []) {
  let count = k;
  if (arr.length === 0) {
    count --;
    if (count === 0) return m;
  } else {
    for (let i = 0; i < arr.length; i++) {
      let rest = arr.slice(); // copy arr without mutating
      let curr = rest.splice(i, 1); // next is th i-th element, curr is the rest
      kthPermutation(rest, count, m.concat(curr))
    }
  }
}

console.log(permutate([1, 2, 3]))
console.log(kthPermutation([1, 2, 3], 6))
