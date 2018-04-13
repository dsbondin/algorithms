const array = [1, 3, 10, 54, 17]

const average = (array) => {
  let total = array.reduce((a, b) => a + b)
  return total / array.length
}

console.log(average(array))
