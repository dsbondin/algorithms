function isAnagram(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return false;
  }
  return string1.split('').sort().join('') === string2.split('').sort().join('');
}
