// Blocking Code

// console.log("Start");
// alert('blocking');
// console.log("End");

// Non-blocking code

// console.log("Start");
// setTimeout(() => {
//     alert('Non-Blocking')
// }, 1000);
// console.log("End");

// Without Callback

// import fs from 'fs';
// console.log("Start");

// let data = fs.readFileSync('D:\\From-Zero-To-Full-Stack-JavaScript\\JavaScript Course\\05. Node Js\\14. BTS\\test.txt')
// console.log(data.toString());
// console.log("End");

// With Callback

import fs from "fs";
console.log("Start");

let data = fs.readFile(
  "D:\\From-Zero-To-Full-Stack-JavaScript\\JavaScript Course\\05. Node Js\\14. BTS\\test.txt",
  (err, res) => {
    err ? console.log(err) : console.log(res.toString());
  }
);
console.log("End");
