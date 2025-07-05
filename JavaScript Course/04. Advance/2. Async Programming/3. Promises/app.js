// 1. Promises
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. Promises can be in one of three states:

// Pending: The operation is ongoing.
// Fulfilled/Resolved: The operation completed successfully.
// Rejected: The operation failed.

// new Promise()
// A Js Promise object contains both the producing code and calls to the consuming code. It can be used to deal with Async operation in Js.

// Resolved -->  .then()  ,  .finally()
// Rejected -->  .then()  ,  .catch()   ,  .finally()

// Syntax :-

// new Promise( (resolve, reject) => {})

// new Promise ( (resolve, reject) => {
//     // Async Operation
//     resolve(value)
//     reject(Error)
// })

// ***************************

// 2.  .then()

// .then() is a method used to handle the
// successful outcome of a promise in Js.
// It takes 2 arguments: (onFulfilled, onRejected)

// **************************

// 3.   .catch()

//  The catch() method returns a Promise and deals with rejected case only.

// Example :-

// const promiseObj = new Promise((resolve, reject) => {
//   let req = false;
//   req == true ? resolve("Request Successful") : reject("Request Rejected");
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// **********************

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even number.`);
    } else {
      reject(`${number} is a odd number.`);
    }
  });
}

var numberToCheck = 7;

checkNumber(numberToCheck)
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

numberToCheck = 6;

checkNumber(numberToCheck)
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

// *******************************

function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callbackHell) function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data`;
      console.log("Inside firstFunc");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data`;
      console.log("Inside secondFunc function");
      resolve(processedData);
    }, 1500);
  });
}

callbackHell()
  .then((data) => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) =>
    console.log(
      `Final result of all functions with Promises: ${processedData2}`
    )
  )
  .catch((error) => console.log(error));
