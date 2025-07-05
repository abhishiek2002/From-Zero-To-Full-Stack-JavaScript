// import "./greet";

// import greet from "./greet.mjs";  // we will not use mjs extension method

import greet from "./greet.js";

greet("Abhishek");


// but after defining "type" "module" in npm , we can't access __filename and __dirname anymore

// console.log(__filename);
// console.log(__dirname);


import { p1, p2, p3 } from "./peoples.js";

console.log(p1, p2, p3);
