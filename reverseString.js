function reverseStringRecursively(string) {
  if (string.length === 1) {
    return string;
  } else if (string.length > 1){
    return reverseStringRecursively(string.slice(1)) + string[0]
  } else {
    return false;
  }
}
