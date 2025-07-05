<h1 align= "center">What is Routing in Node.js?</h1>

```
Routing in Node.js refers to defining the various paths (or URLs) that a web server can respond to. When a client makes a request to a specific URL, the server needs to determine how to respond based on that URL and the type of request (e.g., GET, POST).
```

```
In simple terms, routing is the process of directing incoming requests to specific functions or code based on the request URL and HTTP method.
```

## Basic Routing in Node.js Without External Libraries


You can handle routing using the built-in HTTP module in Node.js. Here's a simple example of basic routing:

### Step-by-Step Example of Routing

```
1. Import the HTTP module: This allows you to create a server and handle HTTP requests.
2. Create the server: The server listens for incoming requests.
3. Check the request URL and method: Based on the URL and method, you respond accordingly.
```
### Example Code

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Define routes based on the request URL and method

  if (req.method === 'GET' && req.url === '/') {
    // Home Page Route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page');
  } 
  else if (req.method === 'GET' && req.url === '/about') {
    // About Page Route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the About Page');
  } 
  else if (req.method === 'GET' && req.url === '/contact') {
    // Contact Page Route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Contact Page');
  } 
  else {
    // 404 - Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### Explanation:

```
req.method: Checks the HTTP method (e.g., GET, POST) of the incoming request.
req.url: Checks the URL of the incoming request to match specific routes.
res.writeHead(): Sets the HTTP status code and headers for the response.
res.end(): Ends the response and sends data back to the client.
Accessing the Server
When you visit http://localhost:3000/, it will respond with "Welcome to the Home Page".
Visiting http://localhost:3000/about will respond with "Welcome to the About Page".
Visiting http://localhost:3000/contact will respond with "This is the Contact Page".
Any other URL will return a 404 Not Found message.
```

## Why Routing is Important

```
Routing allows you to define different endpoints for your application and provide appropriate responses to different client requests. For example, your application can have routes for a home page, about page, contact page, etc.
```

## Using Express.js for Routing

```
While you can create simple routes with the HTTP module, as shown above, routing becomes more powerful and easier to manage with the Express.js framework. Express allows you to create cleaner and more scalable routes.

However, since you're focusing on basic routing in Node.js, this should give you a good understanding of how to define and manage routes manually.

Let me know if you'd like to explore Express.js routing!
```