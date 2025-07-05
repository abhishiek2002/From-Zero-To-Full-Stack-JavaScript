// 1. Async/Await
// Async/Await is a cleaner syntax for handling promises. Instead of using .then() and .catch(), you use async functions and the await keyword to pause execution until a promise is resolved or rejected.

// 2. Async Function :-

// Async is a special function that is designed to operate asynchronously, meaning that it can perform tasks in the background while other code continues to execute.
// Async functions are marked with the async keyword.

// 3. async keyword :-

// async is a keyword use to turn function declaration to async function.

// 4. await operator :-

// The await operator is used to wait for a Promise. It can only be used inside an async function within regular Js code.

// ********************************

// Example :-

// async function getData() {
//   const response = await fetch("https://api.example.com/endpoint");
//   const data = await response.json();
//   return data;
// }

// async function main() {
//   const data = await getData();
//   console.log(data);
// }

// main();

// ********************************

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data retrieved from the server.");
    }, 4000);
  });
}

async function getUserData() {
  try {
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("Remaining task can be executed here");
  } catch (error) {
    console.log(error);
  }
}

console.log("Start fetching");

getUserData().then().catch();

console.log("Fetching in progress...");

// ************************************

function callbackHell() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Inside callbackHell function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - processed`;
      console.log("Inside firstFunc");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - processed data`;
      console.log("Inside secondFunc");
      resolve(processedData);
    }, 1500);
  });
}

async function processedDataWithAsyncAwait() {
  try {
    const data = await callbackHell();
    const processedData1 = await firstFunc(data);
    const processedData2 = await secondFunc(processedData1);
    console.log(
      `Final result of all function with async/await is : ${processedData2}`
    );
  } catch (error) {
    console.log(error);
  }
}

processedDataWithAsyncAwait();
