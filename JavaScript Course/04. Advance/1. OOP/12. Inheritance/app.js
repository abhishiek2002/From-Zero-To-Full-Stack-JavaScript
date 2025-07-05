// Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). This enables code reuse and the creation of hierarchical relationships between classes. In Js, inheritance can be achieved through prototype-based inheritance (before ES6) or using ES6 classes (with the extends keyword)

// ********************* ES5 Code

// function Animal(name) {
//   this.name = name;
// }

// // Method shared among all Animal instances

// Animal.prototype.makeSound = function () {
//   return "Unknown Sound";
// };

// // Subclass Constructor inheriting from Animal

// function Dog(name) {
//   Animal.call(this, name); // Call the superclass constructor
// }

// // Setup prototype chain for Dog to inherit from Animal

// Dog.prototype = Object.create(Animal.prototype);

// // Method specific to Dog

// Dog.prototype.makeSound = function () {
//   return "woof!";
// };

// // Creating Instances of the classes

// var genericAnimal = new Animal("Generic Animal");
// console.log(genericAnimal.name);
// console.log(genericAnimal.makeSound());

// var dog = new Dog("Buddy");
// console.log(dog.name);
// console.log(dog.makeSound());

// ************************* ES6 Code

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Unknown Sound";
  }
}

// Subclass Inheriting from Animal

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound = function() {
    return "Woof";
  }
}

var genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.makeSound());

var dog = new Dog("Buddy");
console.log(dog);
console.log(dog.makeSound());
