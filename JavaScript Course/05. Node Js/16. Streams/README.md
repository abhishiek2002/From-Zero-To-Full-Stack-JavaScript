<h1 align="center">Streams in Node.js</h1>

```
Streams are another key concept in Node.js. They are used to handle data that is readable, writable, or both, in chunks, rather than reading or writing the entire data at once. This is useful when dealing with large files or data transfer.

Streams make it easier to work with large data sets without loading everything into memory at once, improving efficiency.
```

## Types of Streams

1. Readable Streams: Used to read data in chunks. Example: Reading a file from the file system.

2. Writable Streams: Used to write data in chunks. Example: Writing data to a file.

3. Duplex Streams: Both readable and writable. Example: TCP sockets.

4. Transform Streams: A type of duplex stream where the output is modified based on the input. Example: Compression or encryption.

## How Streams Work

Streams operate on chunks of data instead of waiting for an entire resource to be loaded.

Basic Example: Reading from a File Using Streams

```javascript
const fs = require('fs');

// Create a readable stream from a file
const readableStream = fs.createReadStream('input.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
```

In this example:

```
createReadStream(): Creates a stream to read the file in chunks.

on('data', callback): Listens for data events (chunks) from the stream, and processes them. (Remember 'on' and 'once' events)
```

Writable Stream Example

```javascript
const fs = require('fs');

// Create a writable stream to a file
const writableStream = fs.createWriteStream('output.txt');

// Write some data to the file in chunks
writableStream.write('Hello, world!\n');
writableStream.write('Writing more data.\n');
writableStream.end();
```

## Piping Between Streams

You can pipe data from a readable stream directly into a writable stream, which is very useful for tasks like copying files.

```javascript
const fs = require('fs');

// Create readable and writable streams
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

// Pipe data from the readable stream to the writable stream
readableStream.pipe(writableStream);
```

In this example:

```
pipe(): Automatically reads from the readable stream and writes to the writable stream.
```

## Advanced Concepts in Streams

```md
1. Backpressure: Occurs when a writable stream cannot handle the rate at which data is being written. Node.js handles this by pausing and resuming streams to prevent data overload.

2. Transform Streams: Allow you to modify data as it is being read or written.
```

Example of a Transform Stream

```javascript
const { Transform } = require('stream');

// Create a transform stream that converts data to uppercase
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
```

This example takes input from the terminal, converts it to uppercase, and outputs it.

## Summary:
```md
Events: Node.js uses events to handle asynchronous operations. The EventEmitter class allows you to emit and respond to events.

Streams: Streams allow you to read and write data in chunks, making it efficient for handling large files or data transfers.
```