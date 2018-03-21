function isPalindrome(string) {
  if (typeof string !== 'string') {
    return false;
  }

  if (string.length <= 1) {
    return true;
  } else if (string[0] === string[string.length - 1]) {
    string = string.slice(1, string.length - 1)
    return isAnagram(string)
  } else {
    return false
  }
}
