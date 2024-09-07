// console.log('hello');
// console.clear()

// console.table({name:"Abhishek", age:22})

// Variables

// (reserved keyword) (variable name) = (value of any type)

// Declared variable
// let name;

// Assign value
// let banana = 'this is banana fruit';


///////////////////////////// Falsy values

// --> false 
// --> null 
// -->  undefined
// -->  0
// -->  -0
// -->  NaN
// -->  '', "", ``, (empty quotes)



// ////////////////// string
// let str1 = "this is a string";
// let str2 = "This is another string";

// concate
// console.log(str1 + str2); // this is a stringThis is a string
// console.log(str1.concat(str2));  // this is a stringThis is a string

// console.log(str1 + " " + str2);  // this is a string This is a string

// append
// console.log(str1 + str2); // this is a stringThis is a string

// trim
// let str3 = " this is third    string with extra spaces   "  
// console.log(str3.trim());  // only starting and last extra spaces

// lenth

// console.log(str1.length);


// // cases 

// //uppercase
// console.log(str1.toUpperCase());

// // lowercase
// console.log(str2.toLowerCase());

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

// let money = "250";

// convert string to number

// money = parseInt(money);
// money = +money; // short way
// money = Number(money);

// console.log(money);
// console.log(typeof(money));

// - converting number to string

// let num = 50;

// // num = num.toString();
// num = String(num);

// console.log(num);
// console.log(typeof(num));

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

// const obj = {
//     key:value,
//     key2: value2,
// }

// const person = {
//     name: "Abhishek",
//     age: 22,
//     profession: ["Full-Stack Developer", "Data-Analyst", "Data-Scientist", "Ai model Developer"],
// }
// console.log(person);


// console.log(person.name);
// console.log(person['age']);
// console.log(person['profession']);
// console.log(person['profession'][0]);

// delete person.age;
// console.log(person);


// //////////// Functions

// function name(parametersIfAny) {.....}

// function greet(name = "Guest") {
//     console.log(`Hello ${name}`);
// }

// greet();
// greet("abhishek");

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

// JSON is primarily used to represent structured data as key-value pairs, similar to objects in JavaScript. Here's an example:
// {
//     "name": "Abhishek",
//     "age": 22,
//     "isStudent": true,
//     "skills": ["JavaScript", "Python", "Machine Learning"]
//   }
  
// 2. Basic JSON structure:
// Objects are written as key-value pairs, enclosed in curly braces {}.
// Arrays are written in square brackets [] and can contain values like strings, numbers, or even other objects.
// Strings must be in double quotes " ".
// Booleans: true or false.
// Numbers: can be integers or floats, written without quotes.

// 3. Converting JavaScript objects to JSON (Serialization):
// To send or store data in JSON format, you convert (serialize) a JavaScript object to JSON using JSON.stringify().

// const person = {
//     name: "Abhishek",
//     age: 22,
//     isStudent: true
//   };
  
// const jsonString = JSON.stringify(person);
// console.log(jsonString);  // Output: {"name":"Abhishek","age":22,"isStudent":true}
 

// 4. Converting JSON to JavaScript objects (Deserialization):
// To read or use JSON data, you convert (deserialize) JSON to a JavaScript object using JSON.parse().

// const jsonString = '{"name":"Abhishek","age":22,"isStudent":true}';
// const person = JSON.parse(jsonString);

// console.log(person.name);  // Output: Abhishek
// console.log(person.age);   // Output: 22
// console.log(person);

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

// let currentDate = new Date();
// console.log(currentDate);

// passing date in Date() year, month, day, hours, minutes, seconds, milliseconds

// currentDate = new Date(2024, 2, 24, 12, 30, 0, 0);
// console.log(currentDate);


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


// // different format of a date 
// const date = new Date();

// console.log(date.toDateString());  // return date as string
// console.log(date.toISOString);   // return date as iso format
// console.log(date.toLocaleString());  // Returns a value as a string value appropriate to the host environment's current locale.
// console.log(date.toLocaleTimeString());  // Returns a time as a string value appropriate to the host environment's current locale.


// // increment or decrement year, month, day, time or anything in Date()

// const date = new Date();
// console.log(date);

// date.setDate(date.getDate() + 1);  // increase date by 1 
// console.log(date);

// date.setFullYear(2000);     // set year 2000  
// console.log(date);



// setInterval  And setTimeOut

// 1. setTimeout()
// setTimeout() is used to run a function once after a specified delay (in milliseconds). (only one time function will run)

// syntax :- setTimeout(function, delay, arg1, arg2, ...);

// function: The function to be executed.
// delay: Time in milliseconds to wait before executing the function.
// arg1, arg2, ...: Optional arguments that can be passed to the function when it executes.


// Display a message after 2 seconds
setTimeout(function() {
    console.log("Hello, this is executed after 2 seconds!");
}, 2000);


// You can pass arguments to the function executed by setTimeout().

// function greet(name) {
//     console.log("Hello, " + name);
// }
  
// setTimeout(greet, 3000, "Abhishek");  // Output: "Hello, Abhishek" after 3 seconds
  

// 
// If you set a timeout but want to cancel it before it executes, you can use clearTimeout().

// let timeoutId = setTimeout(function() {
//     console.log("This will not be executed");
//   }, 5000);
  
//   // Clear the timeout before it executes
//   clearTimeout(timeoutId);
  