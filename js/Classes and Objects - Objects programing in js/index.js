// this is method of inheritance 

class Animal {
  constructor(name) {
    this.name = name
    console.log("Object is Created...")
  }

  eats() {
    console.log("kha raha hu...")
  }
  jumps() {
    console.log("Me kood rha hu...")
  }
}

class lion extends Animal {
  // agr mujhe iske ander changes krna he to super key word ko bhi use krna pdega
  // this is method of inheritance 

  constructor(name) {
    super(name)
    super.eats() // this is the super key word use
    console.log("lion i'm a Shera")
  }
}
// this is method of inheritance 

let a = new Animal("Bunny")
console.log(a);
// this is method of inheritance 

let l = new lion("Shera");
console.log(l)
