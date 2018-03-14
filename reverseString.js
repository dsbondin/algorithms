function reverseStringRecursively(string) {
  if (string.length === 1) {
    return string;
  } else if (string.length > 1){
    return reverseStringRecursively(string.slice(1)) + string[0]
  } else {
    return '';
  }
}

function reverseStringIteratively(string) {
  let reversedString = ''
  const l = string.length - 1
  for (let i = l; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

function reverseWordsInString(string) {
  return string.split(' ').map(word => reverseStringRecursively(word)).join(' ');
}
