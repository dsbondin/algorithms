// Write an efficient function that checks whether any
// permutation of an input string is a palindrome.

function palindromable(string) {
  let chars = new Set();
  let l = string.length;

  for (let i = 0; i < l; i++) {
    let char = string[i];
    !chars.has(char) ? chars.add(char) : chars.delete(char);
  }

  return chars.size < 2;
}
