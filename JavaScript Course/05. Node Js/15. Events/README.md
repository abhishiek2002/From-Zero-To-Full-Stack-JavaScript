<h1 align="center">Events in Node.js</h1>

```
In Node.js, events are actions or occurrences that happen in the system, like user interactions or completion of tasks. Node.js has a built-in EventEmitter class that allows objects to emit and respond to events. It is part of the events module, and understanding how events work is fundamental for handling asynchronous operations.
```

## How Events Work:

```md
1. Emit: An event can be "emitted" to signal that something has happened.
2. Listen: Code can "listen" for specific events and trigger certain actions when those events occur.
```

### Basic Example of Events

```javascript
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define a listener for the 'greet' event
myEmitter.on('greet', () => {
  console.log('Hello, world!');
});

// Emit the 'greet' event
myEmitter.emit('greet');
```

#### In this example:

```md
1. myEmitter.on('greet', callback): Listens for the greet event.
2. myEmitter.emit('greet'): Emits (triggers) the greet event, which runs the callback, printing "Hello, world!"
```

## EventEmitter Methods

```md
1. on(event, listener): Adds a listener for the specified event.
2. emit(event): Emits an event and executes the corresponding listeners.
3. removeListener(event, listener): Removes a specific listener from an event.
```

### Example with Multiple Listeners


```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
  console.log('Hello there!');
});

myEmitter.on('greet', () => {
  console.log('Another greeting!');
});

myEmitter.emit('greet'); 
```

#### Output:

```
Hello there!
Another greeting!
```

This allows for handling multiple responses to the same event.