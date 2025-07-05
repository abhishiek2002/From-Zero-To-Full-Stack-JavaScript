## What is a Server?

```
A server is a computer or system that provides resources, data, services, or programs to other computers (referred to as clients) over a network. Servers are powerful machines designed to handle many requests at once and are responsible for "serving" web pages, handling database queries, file transfers, and more.

In web development:

A web server is a server that hosts websites and delivers web pages or data to users via HTTP (Hypertext Transfer Protocol).
The server processes incoming requests from clients (such as web browsers) and returns the requested resources (e.g., HTML, CSS, JavaScript, images).
```

## What is an HTTP Request?

```
An HTTP request is a message sent by a client (usually a web browser) to a server, asking for data or a resource, such as a web page, image, or API data. The Hypertext Transfer Protocol (HTTP) defines how requests and responses are structured and transmitted over the web.

There are several types of HTTP requests, each associated with a specific action:

1. GET: Requests data from the server (e.g., retrieving a web page).
2. POST: Sends data to the server (e.g., submitting a form).
3. PUT: Updates existing data on the server.
4. DELETE: Deletes data from the server
```

### An HTTP request consists of the following components:

```
1. HTTP Method: Specifies the type of action (e.g., GET, POST).
2. URL (Uniform Resource Locator): The address of the resource being requested.
3. Headers: Contain metadata, like content type or authorization credentials.
4. Body: (Optional) Includes data for POST or PUT requests, typically in JSON or form format.
```

## Example of an HTTP Request
Here’s a breakdown of a simple HTTP GET request for a webpage:

```vbnet
GET /about HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

```
1. GET: HTTP method requesting data (the /about page).

2. /about: The URL path on the server.

3. Host: The domain name (www.example.com).

4. User-Agent: Information about the client (browser version).

5. Accept: Indicates the type of data the client can accept (e.g., HTML).
```

### The server processes the request and sends back an HTTP response, which typically includes:

```
Status code (e.g., 200 for success).
Headers (metadata about the response).
Body (the actual data, like an HTML page or JSON).
```

# <h1 align = "center"> HTTP Module </h1>

The HTTP module in Node.js allows you to create and manage HTTP servers and handle client requests and server responses. It provides the functionality needed for building web servers, serving content, and communicating over the HTTP protocol.

## How to Use the HTTP Module
To use the HTTP module, you first need to import it:
```js
const http = require('http');
```
## Creating a Basic HTTP Server

```
A simple HTTP server can be created using the http.createServer() method. 
This method takes a callback function that runs each time an HTTP request is received.
```

### Here’s an example of how to create a basic HTTP server:

```javascript
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header (status code and content type)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send a response
  res.end('Hello, World!\n');
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```


### Explanation:
```
1. http.createServer(): This creates the server.
2. req (request): The incoming HTTP request object, which holds data like URL, method, headers, etc.
3. res (response): The outgoing HTTP response object used to send data back to the client.
4. res.writeHead(): Sets the HTTP status code (e.g., 200 for success) and headers (e.g., 'Content-Type').
5. res.end(): Sends the final response and closes the connection.
6. After running this server, you can open your browser and visit http://localhost:3000 to see the message “Hello, World!” displayed.
```

## Handling HTTP Requests

HTTP requests have different methods (GET, POST, etc.) and URLs. You can inspect the request object to handle different routes or request methods.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Check the request method and URL
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Home Page</h1>');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Us</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

### Explanation:
```
1. Request Method (req.method): Identifies the HTTP method, such as GET or POST.
2. Request URL (req.url): Identifies the path of the requested resource (e.g., /, /about).
3. You can create different routes by checking req.method and req.url to respond with different content based on the request.
```
## Sending JSON Data
You can also respond with JSON data by setting the correct content type.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  const data = {
    name: 'John',
    age: 30
  };
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

### Explanation:
```
1. Content-Type: application/json: This header tells the client that the response is JSON.
2. JSON.stringify(data): Converts the JavaScript object into a JSON string before sending it.
```
## Important Methods of HTTP Module

```md
1. http.createServer(callback):

    Creates an HTTP server. The callback is executed every time a request is made.

2. res.writeHead(statusCode, headers):

    Sets the status code and response headers.

3. res.end([data]):

    Ends the response and optionally sends some data.

4. req.method:

    Contains the HTTP method used in the request (e.g., GET, POST).

5. req.url:

    Contains the URL of the request, useful for routing.
```

## Summary

```
The HTTP module in Node.js allows you to create web servers and handle client requests.

You can inspect the request method and URL to determine what the server should respond with.

The http.createServer() method creates the server, and res.end() sends a response.

You can send HTML, plain text, or JSON as responses.

It’s the foundation for building web applications or APIs in Node.js.

With these basics, you can create simple web servers and understand how HTTP communication works in Node.js.
```