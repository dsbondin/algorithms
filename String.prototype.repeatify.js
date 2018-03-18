String.prototype.repeatify = String.prototype.repeatify || function(n) {
  let outputString = ''
  for (let i = 0; i < n; i++) {
    outputString += this
  }
  console.log(outputString)
}

// "hello".repeatify(3) => hellohellohello
