// 1. Synchronous (Sync)
// Synchronous code is executed sequentially, meaning one task completes fully before the next task starts. It blocks the execution of further code until the current operation finishes. This makes the program wait for one task to finish before moving on to the next.

// Key Points:
// Blocking: The program waits for each operation to complete.
// Sequential: Operations happen one after the other.

function add(a, b) {
  return a + b;
}

function multiply(c, d) {
  return c * d;
}

var res1 = add(1, 2);
var res2 = multiply(5, 6);

console.log(res1, res2);
console.log("Abhishek");



// 2. Asynchronous (Async)
// Asynchronous code allows tasks to be executed independently of the main program flow. The program can move on to other tasks while the async operation is happening in the background. When the async operation finishes, it notifies the program, which then handles the result.

// Key Points:
// Non-blocking: The program doesn't wait for the task to finish before moving to the next task.
// Concurrent: Multiple tasks can happen at once or appear to happen at once.
// Callbacks, Promises, and async/await are common patterns to handle asynchronous code.


console.log('Task 1: Start');

setTimeout(() => {
  console.log('Task 2: Async operation finished');
}, 2000);  // Simulates an asynchronous operation like fetching data

console.log('Task 3: End');

// Output:
// Task 1: Start
// Task 3: End
// Task 2: Async operation finished (after 2 seconds)


