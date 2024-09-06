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

