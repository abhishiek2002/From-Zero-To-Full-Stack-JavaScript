var h1 = document.querySelector("h1");

h1.style.color ="teal";
h1.style.borderRadius = "5px";
h1.style.backgroundColor = "black";  // but these style css properties apply as "inline css".
// So, my suggestion is that do not apply css style like that

// Another option is that you can add or remove class to the element and apply css for that class name seperately in css file