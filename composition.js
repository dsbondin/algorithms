const barker = function(name) {
  return {
    bark: function() {
      console.log(`Woof, I am ${name}!`)
    }
  }
}

const runner = function(position, distance) {
  return {
    run: function() {
      return position += distance
    }
  }
}

const charger = function() {
  return {
    charge: function() {
      console.log("I'm fully charged!")
    }
  }
}
