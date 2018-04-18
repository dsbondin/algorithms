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
      return position += distance;
    }
  }
}

const charger = function() {
  return {
    charge: function() {
      console.log("I'm fully charged!");
    }
  }
}

const robotDog = function(name, position, distance) {
  this.name = name;
  this.position = position;
  this.distance = distance;

  return Object.assign(
    {},
    barker(this.name),
    runner(this.position, this.distance),
    charger()
  );
}

const fido = new robotDog("Fido", 0, 5);

fido.bark() // Woof, I am Fido!
fido.charge() // I'm fully charged!
fido.run() // 5
fido.run() // 10
