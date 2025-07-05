const ratings = document.querySelectorAll(".rating");

const ratingContainer = document.querySelector(".rating-container");

const sendBtn = document.querySelector("#send");

const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

// Attach Events

ratings.forEach((rating) =>{
    rating.addEventListener("click", () =>{
        selectedRating = rating.innerText;
        // console.log(selectedRating);
    });
});

sendBtn.addEventListener("click", () =>{
    ratingContainer.innerHTML =`
    <p class="heart">Thanks For Feedback 💞</P>
    <br>
    <p>Your Feedback : ${selectedRating}</p>
    `
    sendBtn.remove();
});