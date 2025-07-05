// Every Js object has a anonymous property called prototype 
// Remember functions and arrays are also a object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties and methods

// Every object is associated with another object.
// The object (obj) is associated with [[Prototype]] Object 
//  -> which means obj object will inherit all properties of Object.prototype || [[Prototype]]


// const obj = {};
// console.log(obj);


// // We can check the prototype of something in 3 ways:
// // -> obj.__proto__
// // -> obj.constructor.prototype
// // -> Object.getPrototypeOf(obj)

// console.log(obj.__proto__);

// console.log(obj.__proto__.__proto__);

// console.log(obj.constructor.prototype);

// console.log(Object.getPrototypeOf(obj));


// const arr = new Array();
// console.log(arr);


// function Person(firstName, lastName, pl) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.pl = pl
// }

// var abhishek = new Person("Abhishek", "Kuntal", "Js and AI");
// console.log(abhishek.__proto__.__proto__.__proto__);


// *******************  Changing the built-in Method (for creating big project , you shouldn't mess with built-in prototype methods)

// console.log(Array.prototype);


// Array.prototype.pop = function () {
//     return "POP IT UP BABE";
// }

// var myArr = [1,2,3,34,5,56,7];
// console.log(myArr.pop());  // POP IT UP BABE
// console.log(myArr);


// ************  defining our own method using prototype 

// console.log(String.prototype)

String.prototype.hello = function () {
    console.log(this);
    console.log(this.toUpperCase());
}

console.log('hello and welcome'.hello());
