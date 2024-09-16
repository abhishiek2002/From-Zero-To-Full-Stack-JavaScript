// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)


var a = document.querySelector("a");
var input = document.querySelector("input");

// // //////////// getting attributes

// // console.log(a.href); // if a has "href" then it will print it otherwise undefined

// // console.log(input.value);

// // console.log(input.type);  // it will print type of input element that is "text" right now


// // //////////////// setting attributes


// // we can also change url of "href" by simply assign

// console.log(a.href = "https://youtube.com");

// console.log(input.type = "date");  // it will change type of input tag from "text" to "date" and print it in console because it is written in "console.log"


// // getAttribute(attrName)

// console.log(input.getAttribute("type"));

// // setAttribute(attrName,value)

// console.log(input.setAttribute("value", "")); // remove value of "value" attributes that is "Hello" in this case

// console.log(input.setAttribute("placeholder", "Enter Your Name"));
