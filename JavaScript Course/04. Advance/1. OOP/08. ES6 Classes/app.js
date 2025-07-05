// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration

class Person {
  constructor(firstName, lastName, age) {
    // Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printUserInfo = function () {
      return `Name: ${this.firstName} ${this.lastName} , Age: ${this.age}`;
    };
  }
  // Prototype Members Method  (available in prototype of object)

  greet() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// inherit property from parent Class

class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age); // this just calls the parent call constructor
    this.pl = pl;
    this.experience = experience;
  }
}

// creating instance of class (that is object)

var abhishek = new Person("Abhishek", "Kuntal", 22);

console.log(abhishek);

console.log(abhishek.printUserInfo());
console.log(abhishek.greet());

const abhi = new Programmer("Abhishek", "Kuntal", "22", "Js and AI", "2 years");
console.log(abhi);
console.log(abhi.age);
console.log(abhi.greet());

//  ******************************** Challenge

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  greet = function () {
    return `Hello ${this.name} , your level is ${this.level}`;
  };
}

var hero1 = new Hero("Abhishek", 100);
console.log(hero1);

class Mage extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}

const hero2 = new Mage("Ankit", 99, "Magic Missile");
console.log(hero2);
