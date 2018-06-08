function reverseStringRecursively(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseStringRecursively(string.slice(1)) + string[0]
  }
}

function reverseStringIteratively(string) {
  let reversedString = ''
  const l = string.length - 1;
  for (let i = l; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

function reverseWordsInString(string) {
  return string.split(' ').map(word => reverseStringRecursively(word)).join(' ');
}

// reverse string in place
function reverseString(string) {
  let temp;
  string = string.split('');
  for (let i = 0; i < string.length/2; i++) {
    temp = string[i];
    string[i] = string[string.length - 1 - i];
    string[string.length - 1 - i] = temp;
  }
  return string.join('');
}

reverseString('airplane');
// => 'enalpria'

// another in-place solution
function reverseInPlace(string) {
  for (let i = 1; i < string.length; i ++) {
    string = string[i] + string.slice(0, i) + string.slice(i + 1);
  }
  return string;
}

console.log(reverseInPlace('computer'));
// retupmoc
