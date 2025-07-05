const greet = require("./greetings");
// const greet = require("./greetings.js"); // doesn't need to write .js after module name

// const person1 = require("./names")
// const { name1, name2, name3 } = require("./names");
const persons = require("./names")


greet("Abhishek");
// greet(name1)
// greet(name2)
console.log(persons);
greet(persons.name1);
greet(persons.name2);

