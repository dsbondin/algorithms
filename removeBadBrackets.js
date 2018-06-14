function removeBadBrackets(string) {
  let counter = 0;
  let l = string.length;
  for (let i = 0; i < l; i ++) {
    if (string[i] === '(') counter ++;
    if (string[i] === ')') counter --;
    if (counter < 0) {
      string = string.slice(0, i) + string.slice(i + 1);
      counter ++;
      i --;
      l --;
    }
  }

  if (counter > 0) {
    for (let i = l - 1; i >= 0; i --) {
      if (string[i] === '(') {
        string = string.slice(0, i) + string.slice(i + 1);
        counter --;
        i ++;
        l --;
        if (counter === 0) break;
      }
    }
  }

  return string;
}

console.log(removeBadBrackets('(((((((a)b(c)(defg()(h)ijk(lmnop'))
