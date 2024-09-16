//  **************************
// createElement()
// appendChild()
// insertBefore()
// append()
// prepend()

/* insertAdjacentElement(
    "beforebegin"
    'afterend'
    'beforeend'
    'afterend'
    element
) */


// removeChild() 
// remove()


// // //////// Creating Element

// var h1 = document.createElement("h1");

// //  add content to "h1"
// h1.textContent = "Good Bye";
// h1.classList.add("greetings");

// console.log(h1);

// // ////////// appendChild()

// // Now, we have already created an element 
// // Now, it is time to add it to the document body
// // appendChild() method append element to the last

// // So, now we will add "h1" element to the body as a child of body at last (append)
// var body = document.body;

// body.appendChild(h1);


// // ////////// insertBefore()

// var ul = document.querySelector("ul");

// var newLi = document.createElement("li");
// newLi.innerText = "I'm new li tag";
// ul.appendChild(newLi);


// var firstLi = document.querySelector("li");

// // selector.insertBefore(what, where)
// ul.insertBefore(newLi, firstLi);        // it will insert "newLi" before "firstLi" in the "ul"


// ///////////// insertAdjacentElement()

// var firstP = document.querySelector('p');

// var i = document.createElement('i');
// i.innerText = "I'm italics";
// i.style.color = "skyblue";

// // insertAdjacentElement(where, what)
// firstP.insertAdjacentElement("beforebegin", i);   // add "i" element to the document just before "firstP" element

// firstP.insertAdjacentElement("afterbegin", i);   // it overwrite above line of code and insert "i" element inside "firstP" element at the beginning

// firstP.insertAdjacentElement("beforeend", i); //  it overwrite above line of code and insert "i" element inside "firstP" element before its ending(i.e. at end).

// firstP.insertAdjacentElement("afterend", i); //  it overwrite above line of code and insert "i" element after end of "firstP" element 


// // ////////// append()  and prepend()

// var firstP = document.querySelector('p');

// var i = document.createElement('i');
// i.innerText = "I'm italics";
// i.style.color = "skyblue";

// var span = document.createElement("span");
// span.innerText = "I'm new span element";
// span.style.color = "pink";

// var section = document.querySelector('section');


// // append()

// section.append(i, span); // add "i" and "span" element after the "section" element content (inside the section)(it can more than 1 element)


// // prepend()

// section.prepend(i, span); // it will overwrite append() and push these "i" & "span" element before "section" element content (inside section)


// /////////// remove() and removeChild()

// var newList = document.querySelector('.new-list');
// var fourth = document.querySelector('.fourth')

// // removeChild()
// newList.removeChild(fourth);  // remove "fourth" child element from "newList" element

// // remove()
// newList.remove();  // remove all content inside the "newList" element 