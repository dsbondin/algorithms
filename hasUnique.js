// Implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structures?


function hasUnique(string) {
  let hash = {}
  for (i = 0; i < string.length; i++ ) {
    if (!hash[string[i]]) {
      hash[string[i]] = 1
    } else {
      return false
    }
  }
  return true
}

function hasUniqueLoop(string) {
  for (i = 0; i < string.length - 1; i++ ) {
    let char = string[i];
    for (j = i + 1; j < string.length; j++) {
      if (string[j] === char) {
        return false
      }
    }
  }
  return true
}
