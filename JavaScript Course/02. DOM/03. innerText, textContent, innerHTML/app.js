
// innerText
// textContent
// innerHTML

var p = document.querySelector("p");
console.log(p);
console.log(p.innerText);  // it give visible text inside an element (unlike textContent. it considers CSS styles and doesn't show hidden text.)
console.log(p.innerHTML);  // it give all html inside (including different tags and their content)
console.log(p.textContent); // it give all text inside the element (including hidden text)


var h1 = document.querySelector("h1");

// changing text inside document(HTML file)
h1.innerText = "Text changed";
h1.innerHTML = "<del>Abhishek</del>";
h1.innerHTML = "<em>Abhishek</em>";