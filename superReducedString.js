function superReducedString(s) {
  function removeDouble(str) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i+1]) {
        return str.slice(0, i) + str.slice(i+2)
      }
    }
    return str;
  }

  while (s !== removeDouble(s)) {
    s = remove(s)
  }

  if(s === '') return 'Empty String'
  return s;
}

const abcoocba = superReducedString('abcoocba');
const abbcccddeee = superReducedString('abbcccddeee');

console.log(abcoocba); // Empty String
console.log(abbcccddeee); // ace
