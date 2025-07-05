// Prototypal inheritance is a mechanism in JS that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In Js, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JS looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is ususally the Object.prototype.

function Animal(name) {
    this.name = name
}

Animal.prototype.sound = function () {
    return "Animal Sound";
}

var animal1 = new Animal("Frog");
console.log(animal1);

console.log(animal1.sound()); // no error because we have already declare sound method to Animal prototype

// **************************

// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }

// var dog1 = new Dog("Buddy", "Genus");
// console.log(dog1.name);

// console.log(dog1.sound());  // error

// **********************8

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}


// Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.brak = function () {
    return "woof";
}

var dog1 = new Dog("Buddy", "Genus");



console.log(dog1);
console.log(dog1.sound());
console.log(dog1.brak());

