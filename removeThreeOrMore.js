// Given a string, remove 3 or more consecutive same characters whenever
// possible and return the final string: "aabbbbaccd" ==> "ccd"

function removeThreeOrMore(string) {
  function removeOnce(s) {
    // \1 is called backreferencing
    return s.replace(/(.)\1{2,}/, '');
  }

  while (string !== removeOnce(string)) {
    string = removeOnce(string);
  }

  return string;
}

console.log(removeThreeOrMore("aabbbbaccd kkkkpppooniiiiissssss"));
