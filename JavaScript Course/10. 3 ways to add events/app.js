// --------------- BAD WAY 1 ----------------

// Bad way 1 to add events is inline method


// --------------- BAD WAY 2 ----------------

var secondBtn = document.querySelector('.second-btn');
secondBtn.onclick = () => {
    alert("Bad Way 2");
}


// --------------- GREATE WAY -------------

var best = document.querySelector('.best');

// best.addEventListener("click", () => {
//     alert("Best Way");
// });

function greetings() {
    alert("Best Way");
};

best.addEventListener('click', greetings);


// --------------- Event (e) Object --------------

var form = document.querySelector('form');
var input = document.querySelector('input');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(input.value);
});