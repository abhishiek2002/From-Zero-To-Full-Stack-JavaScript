
// //////////// Getting parentELement

// var firstLi = document.querySelector("li");

// console.log(firstLi);

// console.log(firstLi.parentElement); // give first parent of the element

// console.log(firstLi.parentElement.parentElement); // give first parent of the first parent of element (i.e. second parent)


// ///////// Getting child

// var ul = document.querySelector("ul");

// console.log(ul);

// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// console.log(ul.children[3]);
// // console.log(ul.children[4]);  // undefined because we have only 4 child of ul element

// console.log(ul.children[0].innerText = "one");


//  ////////////////// siblings

// var firstLi = document.querySelector('li');

// // getting next Element sibling

// console.log((firstLi.nextElementSibling.textContent));

// console.log((firstLi.nextElementSibling.nextElementSibling.textContent));


// // getting previous Element sibling

// var fourthLi = document.querySelector(".fourth");

// console.log(fourthLi.previousElementSibling);

// console.log(fourthLi.previousElementSibling.previousElementSibling);

// console.log(fourthLi.previousElementSibling.previousElementSibling.previousElementSibling);

// console.log(fourthLi.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling); // null because "fourthLi" element has only 3 previous siblings 
