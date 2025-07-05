// fetch() is a modern API for making network requests. It returns a promise that resolves to the Response object representing the response to your request. You can use it to:

// Fetch data from an API.
// Send data to a server.
// Handle responses like JSON, text, or even blob data (images, videos).

console.log(fetch("text.txt"));

// // can handle data using
// // callback
// // new promise
// // async/await

// ******************************

// text() method returns promise, if resolve will return text representation of body

// fetch("text.txt")
//   .then((txtData) => txtData.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// *******************************

// Fetch API promise only rejects when we have network error (not in other cases).

// fetch("textttttttttt.txt")   // this is not network error (this is typing error). So this is not best case for catching error
//   .then((txtData) => txtData.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ******************

// console.log(fetch("text.txt"));

// fetch("text.txt")
//   .then((result) => {
//     if (!result.ok) {
//       throw Error(result.statusText);
//     }
//     return result.text(); // text() method return promise
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// error code

// fetch("texttttttt.txt")
//   .then((result) => {
//     if (!result.ok) {
//       throw Error(result.statusText);
//     }
//     return result.text(); // text() method return promise
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ************************

const results = document.querySelector(".results");

async function renderData() {
  try {
    const response = await fetch("text.txt");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.text();
    results.textContent = data;
  } catch (error) {
    console.log(error);
  }
}

renderData();

// *****************

// steps:- fetch return promise, this promise give resolves(PromiseResult) to the response object( representing response ), you can use it to take data (like text, JSON, or image/videos) that return promise using method like (.text(), .json() etc) that give resolves to the actual data.

fetch("text.txt") // return promise that resolve response object
  .then((res) => console.log(res)); // response object

fetch("text.txt").then((res) => res.text()); // text() method returns another promise that resolve actual text data

fetch("text.txt")
  .then((res) => res.text())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
