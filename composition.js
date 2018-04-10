const barker = function(name) {
  return {
    bark: function() {
      console.log(`Woof, I am ${name}!`)
    }
  }
}

const driver = function(position, distance) {
  return {
    drive: function() {
      return position += distance
    }
  }
}

barker("Fido").bark() // Woof, I am Fido!

driver(12, 4).drive() // 16
