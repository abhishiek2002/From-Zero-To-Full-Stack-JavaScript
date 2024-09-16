
// innerText
// textContent
// innerHTML

var p = document.querySelector("p");
console.log(p);
console.log(p.innerText);  // it give pure text
console.log(p.innerHTML);  // it give all html inside (including different tags and their content)
console.log(p.textContent); // it give pure content (to tag include but content inside tags include)


var h1 = document.querySelector("h1");

// changing text inside document(HTML file)
h1.innerText = "Text changed";
h1.innerHTML = "<del>Abhishek</del>";
h1.innerHTML = "<em>Abhishek</em>";