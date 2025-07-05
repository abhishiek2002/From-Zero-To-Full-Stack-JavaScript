function callbackHell(callback) {
  setTimeout(() => {
    const data = "Inside (callbackHell) function";
    console.log(data);
    callback(data);
  }, 2000);
}

function firstFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed First`;
    console.log(`Inside (firstFunc) Function`);
    callback(processedData);
  }, 1000);
}

function secondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed Second`;
    console.log(`Inside (secondFunc) Function`);
    callback(processedData);
  });
}

// Callback Hell

callbackHell((data) => {
  firstFunc(data, (processedData1) => {
    secondFunc(processedData1, (processedData2) => {
      console.log(`Final result of all functions: ${processedData2}`);
    });
  });
});

// Callback is not always asynchronous

console.log("start");

const num = [1,2,3,4,4,5,6,56,7]

num.forEach((n) => console.log(n))

console.log("End");


