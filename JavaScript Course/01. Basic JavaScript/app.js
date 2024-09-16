// console.log('hello');
// console.clear()

// console.table({name:"Abhishek", age:22})

// //////////////////////////////////////// Variables
// ---------------------------------------
// (reserved keyword) (variable name) = (value of any type)

// ---------------------------------------
// Declared variable
// let name;

// ---------------------------------------
// Assign value
// let banana = 'this is banana fruit';


///////////////////////////// Falsy values

// ---------------------------------------

// --> false 
// --> null 
// -->  undefined
// -->  0
// -->  -0
// -->  NaN
// -->  '', "", ``, (empty quotes)



// ////////////////// string

// ---------------------------------------

// let str1 = "this is a string";
// let str2 = "This is another string";

// ---------------------------------------

// concate
// console.log(str1 + str2); // this is a stringThis is a string
// console.log(str1.concat(str2));  // this is a stringThis is a string

// console.log(str1 + " " + str2);  // this is a string This is a string

// ---------------------------------------

// append
// console.log(str1 + str2); // this is a stringThis is a string

// ---------------------------------------

// trim
// let str3 = " this is third    string with extra spaces   "  
// console.log(str3.trim());  // only starting and last extra spaces

// ---------------------------------------

// lenth

// console.log(str1.length);

// ---------------------------------------

// // cases 

// //uppercase
// console.log(str1.toUpperCase());

// // lowercase
// console.log(str2.toLowerCase());

// ---------------------------------------

// // split and join
// // split function split the string and return an array
// // while join function join every element of an array and return a string


// console.log(str1.split(""));  // return array of every word one by one
// console.log(str1.split(" ")); // split where it find a space in string
// console.log(str1.split("is")); // split the string where it find 'is' in the string and return a array

// console.log(str1.split("").join());  // return a string of all word in string
// console.log(str1.split(" ").join()); 
// console.log(str1.split("").join("-"));
// console.log(str1.split(" ").join(" ")); // return same string 

// console.log(typeof(str1.split("").join("")));

// ---------------------------------------

// let desc = `this is some random
// text
// 1
// 2`;

// console.log(desc);

// let f_name = "Abhishek";
// let l_name = "Kuntal";

// let fullName = `my full name is ${f_name} ${l_name}`
// console.log(fullName);

// let fullNames = "my full name is ${f_name} ${l_name}"  // it does not work
// console.log(fullNames);


// ////////////////////////////// type conversion

// ---------------------------------------

// let money = "250";

// convert string to number

// money = parseInt(money);
// money = +money; // short way
// money = Number(money);

// console.log(money);
// console.log(typeof(money));

// ---------------------------------------

// - converting number to string

// let num = 50;

// // num = num.toString();
// num = String(num);

// console.log(num);
// console.log(typeof(num));

// ---------------------------------------

// - coverting string to decimal

// let money = "50.250"

// money = parseFloat(money);

// console.log(money);
// console.log(typeof(money));


////////////////////////// conditional statements

// if (condition) {.... }
// else if (condition)  {.... }
// else {.....}


// ////////////////////// switch statements


// switch (expression) {
//     case 1:
//         code...;
//         break;
//     case 2:
//         code...;
//         break;
//     case 3:
//         code...;
//         break;
//     default:
//         code...;
//         break;

// }


// ////////////////////////////  For loop

// for (initialExpression; condition; increment/decrement) {
//     code...
// }

// for (let i =0; i<10 ; i++){
//     console.log(i);
    
// }

/////////////////////// while loop

// while (condition) {
//     code ...
// }

// let i = 10;
// while (i>0){
//     console.log(i);
//     i--;
// }


// //////////////////// do while loop

// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while(i <= 5);


// //////////// Logical Operator

// 1. ---> AND (&&)
// 2. ---> OR (||)
// 3. ---> NOT (!)


// ///////// Array

// let fruits = ["apple", "banana", "orange",23];
// console.log(fruits);
// console.log(typeof(fruits[3]));

///////////////// Array Methods

// ---------------------------------------

// const array = [];

// array.concat();  // joins two or more array and returns a result
// array.includes(); // checks if an array contains a specified element
// array.push();   // adds a new element to the end of an array and returns the new length of an array
// array.unshift(); // adds a new element to the beginning of an array and returns the new length of an array
// array.pop();  // removes the last element of an array and returns the removed element
// array.shift(); // removes the first element of an array and returns the removed element
// array.sort();  // sorts the elements alphabetically in strings and in ascending order
// array.slice(); // selects the part of an array and returns the new array
// array.splice(); // removes or replaces existing elements and/or adds new elements

// ---------------------------------------

// const array = ['c', 'c++', 'Python', 'Js'];
// const arr2 = ['html', 'css'];

// console.log(array.concat(arr2));

// console.log(array.includes("html"));

// array.push("html");
// console.log(array);

// array.unshift("css");
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.sort();
// console.log(array);


// const arr3 = ['a','c','d','b'];
// arr3.sort();
// console.log(arr3);

// console.log(array.slice(0,2));
// console.log(array);


// array.splice(1,2);
// console.log(array);


// ///////////// Object

// ---------------------------------------
// syntax:-
// const obj = {
//     key:value,
//     key2: value2,
// }

// ---------------------------------------

// const person = {
//     name: "Abhishek",
//     age: 22,
//     profession: ["Full-Stack Developer", "Data-Analyst", "Data-Scientist", "Ai model Developer"],
// }
// console.log(person);

// ---------------------------------------

// console.log(person.name);
// console.log(person['age']);
// console.log(person['profession']);
// console.log(person['profession'][0]);

// ---------------------------------------

// delete person.age;
// console.log(person);


// //////////// Functions

// ---------------------------------------

// syntax:-
// function name(parametersIfAny) {.....}

// ---------------------------------------

// function greet(name = "Guest") {
//     console.log(`Hello ${name}`);
// }

// ---------------------------------------

// greet();
// greet("abhishek");

// ---------------------------------------

// function add(x, y) {
//     return x+y;
// }

// console.log(add(3,4));


// /////////////// call back function

// When we provide function as an (argument) to other function that argument function is known as callback function.

// function showCallFunc(fn){
//     const value = 10;
//     fn(value);
// }

// showCallFunc(function (value) {
//     console.log(value);                   // 10
// });               


// //////// Global Vs Local Variable

// ---------------------------------------

// let message = "hi";  // global
// console.log(message);  // hi

// function showMessage () {
//     let message = "hello";  // local  (accessible only in this curly braces)
//     console.log(message);  // hello
    
// }

// console.log(message);  // hi


/////////////  Method Or Function In JavaScript Object

// const person = {
//     name : "Abhishek",
//     age: 22,
//     // Defining method in object
//     greet: function () {
//         return `Hello, my name is ${this.name} & I am ${this.age} years old.`;   
//     },
// };

// console.log(person.greet());


// ////////////////// JSON (JavaScript Object Notation)

// JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data. It is easy for humans to read and write and easy for machines to parse and generate. Since you're learning JavaScript, handling JSON is very natural as JSON is built into the language.

// ---------------------------------------

// JSON is primarily used to represent structured data as key-value pairs, similar to objects in JavaScript. Here's an example:
// {
//     "name": "Abhishek",
//     "age": 22,
//     "isStudent": true,
//     "skills": ["JavaScript", "Python", "Machine Learning"]
//   }

// ---------------------------------------

  
// 2. Basic JSON structure:
// Objects are written as key-value pairs, enclosed in curly braces {}.
// Arrays are written in square brackets [] and can contain values like strings, numbers, or even other objects.
// Strings must be in double quotes " ".
// Booleans: true or false.
// Numbers: can be integers or floats, written without quotes.

// ---------------------------------------

// 3. Converting JavaScript objects to JSON (Serialization):
// To send or store data in JSON format, you convert (serialize) a JavaScript object to JSON using JSON.stringify().

// const person = {
//     name: "Abhishek",
//     age: 22,
//     isStudent: true
//   };
  
// const jsonString = JSON.stringify(person);
// console.log(jsonString);  // Output: {"name":"Abhishek","age":22,"isStudent":true}
 
// ---------------------------------------

// 4. Converting JSON to JavaScript objects (Deserialization):
// To read or use JSON data, you convert (deserialize) JSON to a JavaScript object using JSON.parse().

// const jsonString = '{"name":"Abhishek","age":22,"isStudent":true}';
// const person = JSON.parse(jsonString);

// console.log(person.name);  // Output: Abhishek
// console.log(person.age);   // Output: 22
// console.log(person);

// ---------------------------------------

// 5. Handling JSON in JavaScript (Example)
// Let’s look at a full example where you serialize a JavaScript object to JSON and then deserialize it back to an object:

// JavaScript object
// const person = {
//     name: "Abhishek",
//     age: 22,
//     skills: ["JavaScript", "Python", "Machine Learning"]
//   };
  
//   // Convert object to JSON string
//   const jsonString = JSON.stringify(person);
//   console.log("Serialized JSON:", jsonString);
  
//   // Convert JSON string back to object
//   const parsedPerson = JSON.parse(jsonString);
//   console.log("Deserialized object:", parsedPerson);
//   console.log("Name:", parsedPerson.name);
  


// /////////////  Date And Time

// ---------------------------------------

// let currentDate = new Date();
// console.log(currentDate);

// ---------------------------------------

// passing date in Date() year, month, day, hours, minutes, seconds, milliseconds

// currentDate = new Date(2024, 2, 24, 12, 30, 0, 0);
// console.log(currentDate);

// ---------------------------------------

// const currentDate = new Date();
// console.log(currentDate);

// const year = currentDate.getFullYear();
// const month = currentDate.getMonth();
// const date = currentDate.getDate();
// const day = currentDate.getDay();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const milliseconds = currentDate.getMilliseconds();

// console.log(`Year : ${year}`);
// console.log(`Month : ${month}`);
// console.log(`Date : ${date}`);
// console.log(`Day : ${day}`);
// console.log(`Hours : ${hours}`);
// console.log(`Minutes : ${minutes}`);
// console.log(`Milliseconds : ${milliseconds}`);

// ---------------------------------------

// // different format of a date 
// const date = new Date();

// console.log(date.toDateString());  // return date as string
// console.log(date.toISOString);   // return date as iso format
// console.log(date.toLocaleString());  // Returns a value as a string value appropriate to the host environment's current locale.
// console.log(date.toLocaleTimeString());  // Returns a time as a string value appropriate to the host environment's current locale.

// ---------------------------------------

// // increment or decrement year, month, day, time or anything in Date()

// const date = new Date();
// console.log(date);

// date.setDate(date.getDate() + 1);  // increase date by 1 
// console.log(date);

// date.setFullYear(2000);     // set year 2000  
// console.log(date);



// setInterval  And setTimeout

// ---------------------------------------

// 1. setTimeout()
// setTimeout() is used to run a function once after a specified delay (in milliseconds). (only one time function will run)

// ---------------------------------------

// syntax :- setTimeout(function, delay, arg1, arg2, ...);

// function: The function to be executed.
// delay: Time in milliseconds to wait before executing the function.
// arg1, arg2, ...: Optional arguments that can be passed to the function when it executes.

// ---------------------------------------

// Display a message after 2 seconds
// setTimeout(function() {
//     console.log("Hello, this is executed after 2 seconds!");
// }, 2000);

// ---------------------------------------

// You can pass arguments to the function executed by setTimeout().

// function greet(name) {
//     console.log("Hello, " + name);
// }
  
// setTimeout(greet, 3000, "Abhishek");  // Output: "Hello, Abhishek" after 3 seconds
  
// ---------------------------------------

// If you set a timeout but want to cancel it before it executes, you can use clearTimeout().

// let timeoutId = setTimeout(function() {
//     console.log("This will not be executed");
//   }, 5000);
  
//   // Clear the timeout before it executes
//   clearTimeout(timeoutId);

// ---------------------------------------

// 2. setInterval()
// setInterval() is used to repeatedly execute a function at specified intervals (in milliseconds). It continues executing until it is explicitly stopped using clearInterval().

// ---------------------------------------

// syntax :-
// setInterval(function, interval, arg1, arg2, ...);
// function: The function to be executed.
// interval: Time in milliseconds between each execution of the function.
// arg1, arg2, ...: Optional arguments passed to the function when it executes.

// ---------------------------------------

// // Log a message every 2 seconds
// setInterval(function() {
//     console.log("This message repeats every 2 seconds");
// }, 2000);

// ---------------------------------------

// // To stop the repeated execution of a function, use clearInterval().
// let intervalId = setInterval(function() {
//     console.log("Repeating message");
// }, 1000);
  
// ---------------------------------------

//   // Stop the interval after 5 seconds
// setTimeout(function() {
//     clearInterval(intervalId);
//     console.log("Interval cleared");
// }, 5000);

// ---------------------------------------

// 3. Differences Between setTimeout() and setInterval()
// setTimeout(): Executes the function once after a specified delay. (one time only)
// setInterval(): Repeatedly executes the function at the specified interval until stopped. (repeatedly)

//////////////////// Template Strings (Template Literals)

// ---------------------------------------

// Template strings (also called template literals) make it easier to create strings, especially when dealing with dynamic values, multiline strings, or complex expressions.

// ---------------------------------------

// Basic Syntax:
// Template literals use backticks (`) instead of quotes (" or ') to create strings. They allow embedding expressions and variables directly within the string using ${}.

// ---------------------------------------

// const result = (x, y) => x * y;
// console.log(`The product of 5 and 10 is ${result(5, 10)}`);  // Output: "The product of 5 and 10 is 50"



//////////////////  Arrow Functions

// Arrow functions (=>) provide a concise way to write functions in JavaScript. They are syntactically shorter and behave differently with respect to the this keyword compared to traditional functions.

// ---------------------------------------

// // Basic Syntax:-

// const functionName = (param1, param2, ...) => {
//     // Function body
//     return expression;
// };

// ---------------------------------------

// If the function has a single expression, you can omit the return keyword and curly braces {}. The value is automatically returned.

// const add = (a, b) => a + b;
// console.log(add(5, 10));  // Output: 15


// const greet = (username) => `Hello ${username}`;
// console.log(greet("Abhishek"));


// ///////////////////  Enhanced object literals 

// ---------------------------------------

// Enhanced object literals in JavaScript provide a cleaner and more concise syntax for defining objects, making it easier to write and manage object properties, methods, and dynamic keys. These enhancements were introduced in ES6 (ECMAScript 2015) and allow for a more expressive and readable way to create objects.

// ---------------------------------------

// 1. Shorthand for Property Assignment
// In cases where the object key and variable name are the same, you can use a shorthand to avoid repetition.

// const name = "Abhishek";
// const age = 22;

// const person = {
//   name: name,
//   age: age
// };

// console.log(person);  // Output: { name: "Abhishek", age: 22 }

// ---------------------------------------

// // With Enhanced Object Literals (ES6):

// const name = "Abhishek";
// const age = 22;

// const person = { name, age };

// console.log(person);  // Output: { name: "Abhishek", age: 22 }

// ---------------------------------------

// 2. Shorthand for Method Definitions
// You can define methods in an object without the need for the function keyword.

// const person = {
//     name: "Abhishek",
//     greet: function() {
//       console.log("Hello, my name is " + this.name);
//     }
//   };
  
// person.greet();  // Output: "Hello, my name is Abhishek"

// ---------------------------------------

// With Enhanced Object Literals (ES6):

// const person = {
//     name: "Abhishek",
//     greet() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };
  
// person.greet();  // Output: "Hello, my name is Abhishek"
 
// ---------------------------------------

// 3. Computed Property Names
// Computed property names allow you to define property names dynamically using expressions inside square brackets [].

// const prop = "age";

// const person = {
//   name: "Abhishek",
//   [prop]: 22
// };

// console.log(person);  // Output: { name: "Abhishek", age: 22 }

// ---------------------------------------

// 4. Concise Syntax for super
// When defining methods in an object that is derived from another object, the super keyword allows you to call methods from the prototype of the object. With enhanced object literals, this can be done concisely.

// const parent = {
//     greet() {
//       return "Hello from parent";
//     }
// };
  
// const child = {
//     greet() {
//         return `${super.greet()}, and hello from child!`;
//     }
// };
  
// console.log(child.greet());  // Output: "Hello from parent, and hello from child!"
  

// //////////////////////////// Spread Operator

// The spread operator (...) in JavaScript allows you to expand an iterable (such as an array, string, or object) into its individual elements. It was introduced in ES6 (ECMAScript 2015) and is widely used for copying, combining, or manipulating arrays and objects.

// ---------------------------------------

// 1. Using the Spread Operator with Arrays

// ---------------------------------------

// Expanding Arrays:
// The spread operator can be used to "spread" the elements of an array into individual elements.

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];

// console.log(arr2);  // Output: [1, 2, 3, 4, 5, 6]

// ---------------------------------------

// Copying Arrays:
// The spread operator can be used to create a shallow copy of an array.

// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];

// console.log(copiedArray);  // Output: [1, 2, 3]

// ---------------------------------------

// Merging Arrays:
// You can merge two or more arrays using the spread operator.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];

// console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6]

// ---------------------------------------

// 2. Using the Spread Operator with Objects

// ---------------------------------------

// Expanding Objects:
// The spread operator can also be used with objects to copy properties from one object to another or to merge objects.

// const person = { name: "Abhishek", age: 22 };
// const student = { ...person, major: "Computer Science" };

// console.log(student);  
// // Output: { name: "Abhishek", age: 22, major: "Computer Science" }

// ---------------------------------------

// Copying Objects:
// Similar to arrays, the spread operator can be used to create a shallow copy of an object.

// const originalObject = { name: "Abhishek", age: 22 };
// const copiedObject = { ...originalObject };

// console.log(copiedObject);  // Output: { name: "Abhishek", age: 22 }

// ---------------------------------------

// Merging Objects:
// You can combine the properties of multiple objects into one using the spread operator.

// const obj1 = { name: "Abhishek" };
// const obj2 = { age: 22 };
// const mergedObject = { ...obj1, ...obj2 };

// console.log(mergedObject);  // Output: { name: "Abhishek", age: 22 }

// ---------------------------------------

// Overwriting Properties:
// When merging objects, properties from the last object will overwrite properties from previous objects.

// const obj1 = { name: "Abhishek", age: 20 };
// const obj2 = { age: 22, major: "Computer Science" };
// const updatedObject = { ...obj1, ...obj2 };

// console.log(updatedObject);  // Output: { name: "Abhishek", age: 22, major: "Computer Science" }

// ---------------------------------------

// 3. Using the Spread Operator with Strings
// The spread operator can also be used to convert a string into an array of individual characters.

// const str = "hello";
// const chars = [...str];

// console.log(chars);  // Output: ["h", "e", "l", "l", "o"]

// ---------------------------------------

// 4. Function Arguments (Rest vs. Spread Operator)
// The spread operator can be used in function calls to pass individual elements of an array as arguments.

// const numbers = [1, 2, 3];

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(...numbers));  // Output: 6


// /////////////////////////////////// Array Destruturing

// // Array destructuring allows you to extract elements from an array and assign them to variables based on their positions.

// const foo = ['one','two','three'];

// var [one] = foo;
// console.log(one); // 'one'

// var [one,two] = foo;
// console.log(one," ",two); // "one two"

// var [one, two, three] = foo;
// console.log(one, " ", two, " ", three);  // "one two three"

// // Skipping Elements:
// // You can skip elements in the array by leaving the corresponding variable space empty.

// var [one, ,three] = foo;
// console.log(one, " ", three);  // "one three"

// // Default Values:
// // If the array doesn’t have enough elements, you can assign default values.

// var [one, two, three, four = 4] = foo;
// console.log(four);  // 4

// ---------------------------------------

// // Rest Operator with Array Destructuring:
// // You can use the rest operator (...) to gather the remaining elements into a new array.

// var arr = [1,2,1,3,4,4,5,6,7];

// var [one , two , three , ...rest] = arr;  // rest name is not compulsory
// console.log(one);   // 1
// console.log(two);  // 2
// console.log(three);  // 1
// console.log(...rest);  // 3 4 4 5 6 7
// console.log(rest);  // return array of 3 4 4 5 6 7 that is [3, 4, 4, 5, 6, 7]
// console.log(rest[1]);

// Swapping Variables:
// Array destructuring can also be used to swap the values of two variables without using a temporary variable.

// var a = 5;
// var b = 4;

// [a , b] = [b, a];
// console.log(a); // 4
// console.log(b); // 5



// ////////////////////////// Object Destructuring

// // Object destructuring allows you to extract properties from objects and assign them to variables by matching the property names.

// var obj = {name:"Abhishek", age:22};

// var {name , age} = obj;

// console.log(name); // "Abhishek"
// console.log(age);  // 22

// // Renaming Variables:
// // You can assign the properties to variables with different names.

// var {name : person_name, age : person_age } = obj;

// console.log(person_name);  // "Abhishek"
// console.log(person_age);  // 22

// // Default Values:
// // You can assign default values to variables if the property doesn’t exist in the object.

// var obj = {name : "Abhishek"};

// var {name , age = 22} = obj;

// console.log(name);  // Abhishek
// console.log(age);  // 22

// // Destructuring Nested Objects:
// // If an object contains nested objects, you can destructure those as well.

// var person = {
//     name : "Abhishek",
//     info : {
//         age : 22,
//         skill : ["Python", "JavaScript", "AI", "C++"]
//     }
// };

// var {info : {age , skill}} = person;
// console.log(age);
// console.log(skill);

// //////////// function destructuring

// const person = {
//     name:"abhishek",
//     age:22,
//     country:"India"
// }

// function printPersonInfo1(person) {
//     console.log(`Name: ${person.name}`);
//     console.log(`Age: ${person.age}`);
//     console.log(`Country: ${person.country}`);
// }

// printPersonInfo1(person);

// // or we can write

// function printPersonInfo({name, age, country}) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Country: ${country}`);
// }

// printPersonInfo(person);

// ---------------------------------------

// let options = {
//     title: "My menu",
//     items: ['item1', 'item2']
// };

// function showMenu({title, width: w = 100, height: h = 200, items: [item1, item2]}) {
//     console.log(`${title} ${w} ${h}`);
//     console.log(item1);
//     console.log(item2);
// };

// showMenu(options);

// //////////// Nested Destructuring

// const songs = [
//     {name: "Lucky You", singer: "JOyner", duration: 4.44},
//     {name: "Just LIke You", singer: "NF", duration: 2.44},
//     {name: "Old Town Road", singer: "Lil Nas X", duration: 3.44},
// ];

// const [, ,{singer}] = songs;

// console.log(singer);


// ////////////// Ternary Operator

// // condition?expressionIfTrue : expressionIfFalse;

// let password = 4;

// function passChecker(ps) {
//     // if (ps === 8){
//     //     return 'Strong Password';
//     // } else {
//     //     return "Password should be 8 characters.";
//     // }

//     return ps === 8?'Strong Password' : "Password should be 8 characters.";
// }

// console.log(passChecker(password));

// const age = 25;

// const isAdult = age >= 18?true:false;
// console.log(isAdult);
 

// ////////// "for...in" loop

// use for specially objects

// const person = {
//     name : "abhishek",
//     age:22
// }

// for (let key in person) {
//     console.log(key);
//     console.log(`${person[key]}`);
// }

// let array = [1 ,2 ,3 ,4 ,5];

// for (let index in array) {
//     console.log(`${index} : ${array[index]}`);
// }

// /////////////// "for...of" loop

// use for array

// ///////////////// map() Helper

// let numbers = [1,2,3,4,5];

// let double = numbers.map((num)=>num=num*2);
// console.log(double);
// console.log(numbers);

// let peoples = [
//     {firstName: "Abhishek", lastName: "Kuntal"},
//     {firstName: "Ankit", lastName: "Meena"},
// ];

// let firstName = peoples.map((person)=>person.firstName);
// console.log(firstName);

// // Create array with random numbers.
// // Map over each item in that array, & multiply each item by 10

// var numbers = [2,433,5,6,65,456];

// function doubleFunction (num) {
//     return num * 2;
// };

// var double = numbers.map(doubleFunction);
// console.log(double);

// ///////////// filter() Helper

// var songs = [
//     {name: "Lucky You", singer: "JOyner", duration: 4.44},
//     {name: "Just LIke You", singer: "NF", duration: 2.44},
//     {name: "Old Town Road", singer: "Lil Nas X", duration: 3.44},
// ];

// var filtering = songs.filter((song) => song.duration>2.5);

// console.log(filtering);

// var computers = [
//     {ram: 4, hdd: 100},
//     {ram: 8, hdd: 200},
//     {ram: 16, hdd: 300},
//     {ram: 32, hdd: 400},
// ];

// var filtering = computers.filter(computer => computer.ram >= 16);
// console.log(filtering);

// // Iterate over "ages" array
// // Print only adults, those whos age is greater than 18

// var ages = [21, 22, 21, 22, 23, 12 ,3 , 16, 45];

// console.log("Adults are : ",ages.filter(age => age>=18));

// // Iterate over "words" array
// // Print only those words which length is greater than 6

// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// var filtering = words.filter(word => word.length > 6);
// console.log(filtering);

// ///////////////////// find() Helper

// var peoples = [
//     {name:"Abhishek", age:22},
//     {name:"Ankit", age:23},
//     {name:"Vikram", age:22},
//     {name:"Abhishek", age:23},
// ];

// var finding = peoples.find(person => person.age === 23 & person.name === "Abhishek");
// console.log(finding);

// var posts = [
//     {id: 1, content: "Good Post"},
//     {id: 2, content: "Funny Post"},
//     {id: 3, content: "Sad Post"},
// ];

// var postReq = posts.find(post => post.content === "Funny Post");

// console.log(postReq);

// var k = posts.map(post => post.id);
// console.log(k);  // [1, 2, 3]

// var t = posts.filter(post => post.id);
// console.log(t);  // [ {id: 1, content: "Good Post"}, {id: 2, content: "Funny Post"}, {id: 3, content: "Sad Post"}];

// /////////////// every() and some() Helper

// var peoples = ['Abhishek', 'Vikram', 'Ankit', 'Abhishek', 'Rahul'];

// console.log(peoples.every(person => person.length>=5)); // true
// console.log(peoples.every(person => person.length>=8)); // false

// console.log(peoples.some(person => person.length >= 8)); // true


// ////////// reduce() Helper

// The reduce() method applies the reducer function to each element of an array, accumulating the results into a single value. It is often used to perform v=calculation or aggregations on array elements and simplify the array into a single value.

// var numbers = [1,2,3,4,4,5];

// var sum = numbers.reduce((acc, num) => acc += num, 0);

// // or
// var sum = numbers.reduce((acc, current_num) => {
//     return acc = acc + current_num;
// }, 0);

// // or
// var sum = numbers.reduce((acc, current_num) => {
//     return acc + current_num;
// }, 0);

// console.log(sum);


// // array to object using reduce()

// var fruits = [
//     "apple",
//     "banana",
//     "orange",
//     "banana",
//     "apple",
//     "orange",
//     "apple",
//     "grape",
// ];

// var obj = {}

// fruits.reduce((acc, fruit) => {
//     return obj[fruit] = (obj[fruit] || 0) + 1 ;
// }, 0);

// console.log(obj); // {apple: 3, banana: 2, orange: 2, grape: 1}


// ///////////////////// Map Data Structure

// Map is a built-in data structure that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences.

// Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.

// Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.

// Iteration: Map provides built-in methods for easy iteration over its elements.

// var map = new Map();

// var keyOne = "string";
// var keyTwo = {};
// var keyThree = function () {};

// map.set(keyOne, "Value of key one");
// map.set(keyTwo, "Value of key two");
// map.set(keyThree, "Value of key three");

// console.log(map);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete(keyTwo)); // remove keytwo entry
// console.log(map);

// console.log(map.has(keyTwo));  // check map has keyTwo or not return boolean

// console.log(map.size);


// iteration

// // iterate over Map
// for (let [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }

// // iterate over Keys
// for (let key of map.keys()) {
//     console.log(key);
// }

// // iterate over values

// for (let value of map.values()) {
//     console.log(value);
// }

// 1. Create a new Map
// 2. Set these properties ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the peoperty "b" and then check the size

// var map = new Map();

// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);

// // map.get("a");
// console.log(map.get("a"));

// console.log(map.size);

// map.delete("b");
// console.log(map.size);


// /////////////////// Set Data Structure

// Set is a built-in data structure that represents a collection of unique values. Unlike array, Set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occur only once within a Set.

// Set objects are useful while you need to store a list of unique elements and quickly check for the existence of a specific value.

// var set = new Set();

// var set = new Set([1,2,3]);
// console.log(set); // Set(3) {1, 2, 3}


// var intialValues = ["one","two","three"];

// set.add(intialValues); // take initialValues as single entity

// console.log(set); // Set(4) {1, 2, 3, Array(3)}

// console.log(set.has(2)); // true
// console.log(set.has(44));  // false
// console.log(set.size);   // 4


// set.delete(3);  // remove property 3
// console.log(set.size);  // 3

// set.clear();
// console.log(set);


// // iterate over Set

// for (let item of set){
//     console.log(item);
// }


// // 1. Create a Set name (letters)
// // 2. Add ("a", "b", "c") as properties
// // 3. Iterate over Set and log the values.

// var set = new Set();

// set.add("a");
// set.add("b");
// set.add("c");

// for(let item of set){
//     console.log(item);
    
// }

// ///////////////// Symbols

// Symbol is a unique and immutable primitive data type. 

// A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and can not be recreated or changed. This uniqueness ensures that symbols will  not collide with other property names, even if they have same string representation.

// var mySymbol = Symbol();
// console.log(typeof(mySymbol)); // symbol

// var mySymbol = Symbol("My custom Symbol");
// console.log(mySymbol);  // Symbol(My custom Symbol)

// // comparing Symbols

// var mySymbol1 = Symbol("name");
// var mySymbol2 = Symbol("name");

// var obj = {};

// obj[mySymbol1] = "Value 1";
// obj[mySymbol2] = "Value 2";

// console.log(obj);

// var symbol1 = Symbol('name');
// var symbol2 = Symbol('name');

// var Abhishek = {};

// Abhishek.age = 22;
// Abhishek['gender'] = 'male';
// Abhishek.age = 21;
// Abhishek[symbol1] = 'alex';
// Abhishek[symbol2] = 'john';
// console.log(Abhishek);

// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object.
// 4. Store symbol as the property to that object.
// 5. Iterate over symbol

// var symbol = Symbol("foo");
// console.log(typeof symbol);

// var obj = {};

// obj[symbol] = "Value of foo";
// console.log(obj);

// for (let i in obj){
//     console.log(obj[i]);
// }


// /////////////////////////////////// DOM (Document Object MOdel)

// When a web page is loaded, the browser creates a Document Object Model of the page.
// It is a tree like structure.