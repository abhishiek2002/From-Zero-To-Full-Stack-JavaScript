## Thread

```
Each unit capable of executing code is called a thread.
```
<h1 align = "center">Event Loop in Node.js </h1>

```
The event loop is one of the most important concepts in Node.js, as it handles all asynchronous operations (e.g., reading files, making HTTP requests, interacting with databases). It enables Node.js to be non-blocking and highly efficient, making it ideal for handling many concurrent operations.
```

## Key Concept: Non-blocking I/O
```
Node.js is single-threaded, meaning it uses one thread to handle all requests. However, it can manage many tasks at once using non-blocking I/O, meaning that tasks like reading files or making HTTP requests don’t block the entire program from running. This is where the event loop comes into play.
```

### How the Event Loop Works

```md
1. Execution Stack: When Node.js executes code, it first runs it on the main thread (also known as the call stack).

2. Callbacks & Asynchronous Tasks: When an asynchronous operation (like reading a file or making an HTTP request) is initiated, Node.js delegates the operation to the underlying system (like the file system or network). It continues executing other code while the task is being processed in the background.

3. Event Loop: Once the background task is complete (like reading a file), the callback function for that task is placed in the event loop. The event loop waits for the call stack to be empty (i.e., no more code is running) before it executes the callback functions.
```

#### Example of Event Loop in Action

```javascript
console.log('Start');

// Asynchronous function
setTimeout(() => {
  console.log('Inside Timeout');
}, 2000); // Timeout of 2 seconds

console.log('End');
```

#### Explanation:

```md
1. console.log('Start'): This is executed first, printed immediately.
2. setTimeout(): This is an asynchronous function, so it is delegated to the event loop after being initiated. Node.js doesn’t wait for 2 seconds; it moves on to execute the rest of the code.
3. console.log('End'): This is executed next, printed immediately.
4. Event Loop: After 2 seconds, the callback inside setTimeout() is picked up by the event loop and executed, printing Inside Timeout last.
```
#### Output:

```sql
Start
End
Inside Timeout
```

## Phases of the Event Loop


#### The event loop works in different phases to manage asynchronous tasks:

```md
1. Timers Phase: Handles setTimeout and setInterval callbacks.
2. Pending Callbacks: Executes I/O-related callbacks (e.g., file system, network).
3. Idle, Prepare: For internal system operations (typically skipped by developers).
4. Poll Phase: Retrieves new I/O events and executes callbacks for completed tasks.
5. Check Phase: Executes setImmediate() callbacks.
6. Close Callbacks: Handles close events (e.g., closing network connections).
```

## Summary

```md
1. The event loop is responsible for handling all asynchronous tasks in Node.js.
2. It allows Node.js to perform non-blocking operations, enabling it to handle many tasks at once.
3. When an asynchronous operation completes, its callback is placed in the event loop to be executed when the call stack is empty.
4. Understanding the event loop is key to writing efficient, non-blocking code in Node.js. Let me know if you'd like to dive deeper into this topic!
```