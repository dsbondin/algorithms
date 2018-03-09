// Design an algorithm and write code to remove the duplicate characters in a string
// without using any additional buffer. Note: One or two additional variables are fine.
// An extra copy of the array is not.

function removeDuplicates(string) {
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[j] === string[i]) {
        string = string.slice(0, j) + string.slice(j + 1);
        j--;
      }
    }
  }
  return string;
}
