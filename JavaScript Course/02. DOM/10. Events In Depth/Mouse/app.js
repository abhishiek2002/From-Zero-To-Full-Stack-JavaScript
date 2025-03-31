// 


// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup


var one = document.querySelector('.click');
var two = document.querySelector('.dblclick');
var three = document.querySelector('.mousedown');
var four = document.querySelector('.mouseenter');
var five = document.querySelector('.mouseleave');
var six = document.querySelector('.mousemove');
var seven = document.querySelector('.mouseout');
var eight = document.querySelector('.mouseover');
var nine = document.querySelector('.mouseup');
var ten = document.querySelector('.contextmenu');


one.addEventListener('click', () =>{
    one.classList.toggle('red');
});


two.addEventListener('doubleclick', () =>{
    two.classList.toggle('teal');
});

three.addEventListener('mousedown', () =>{
    three.classList.toggle('steelblue');
});

four.addEventListener('mouseenter', () =>{
    four.classList.toggle('orange');
});

five.addEventListener('mouseleave', () =>{
    five.classList.toggle('purple');
});

six.addEventListener('mousemove', () => {
    six.classList.toggle('crimson');
});

seven.addEventListener('mouseout', () =>{
    seven.classList.toggle('chocolate');
});

eight.addEventListener('mouseover', () =>{
    eight.classList.toggle('aqua');
});

nine.addEventListener('mouseup', () =>{
    nine.innerText =" Hey I am nine ";
})
ten.addEventListener('contextmenu', () =>{
    ten.classList.toggle('blue');
});