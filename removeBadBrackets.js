// buggy code

function removeBadBrackets(string) {
  let closed = true;
  let l = string.length;
  let last;
  for (let i = 0; i < string.length; i++) {
    if (closed) {
      if (string[i] === '(') closed = false; last = i;
      if (string[i] === ')') string = string.slice(0, i) + string.slice(i + 1);
    } else {
      if (string[i] === ')') closed = true;
      if (string[i] === '(') string = string.slice(0, i) + string.slice(i + 1);
    }
  }
  if (!closed) string = string.slice(0, last) + string.slice(last + 1);
  return string;
}

console.log(removeBadBrackets('a)b(c) (defg() (h) ijk (lmnop'))
