// https://jsonplaceholder.typicode.com/todos/1
// https://jsonplaceholder.typicode.com/todos

const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);

// function makeRequest() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => {
//       if (!res.ok) throw Error(res.statusText);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.id);
//       console.log(data.title);
//       console.log(data);

//       document.querySelector(".id").innerHTML = data.id;
//       document.querySelector(".title").innerHTML = data.title;
//     }).catch(err => console.log(err));
// }

async function makeRequest() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos"); // give array of 200 objects inside
    if (!res) throw Error(res.statusText);
    // console.log(res);

    const data = await res.json();
    console.log(data);

    let output = document.querySelector(".all-posts");
    data.forEach((element) => {
      output.innerHTML += `
        <div> (ID): ${element.id} </div>
        <div> (title): ${element.title} </div>
        <br>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}
