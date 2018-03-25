// find the largest permutation of an integer

function largestPermutation(number) {
   let string = number.toString();
   let array = [];
   let index;

   for (let i = 0; i < string.length; i++) {
      index = parseInt(string[i])
       if (array[9 - index] === undefined) {
           array[9 - index] = string[i];
       } else {
           array[9 - index] += string[i]
       }
       console.log(array)
   }

  return parseInt(array.join(''))
}


largestPermutation(123450000098743679)
// => 988765443321000000
