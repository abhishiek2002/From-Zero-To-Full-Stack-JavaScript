import http from "http";

// **********************************************

// Create A Server

// const server = http.createServer((req, res) => {
//   console.log(req);
//   // res.setHeader("Content-Type", "text/html");
//   // res.statusCode = 404;
//   // res.statusMessage = "Bad";

//   // shorthand for status ( code , message, header)

//   res.writeHead(202, "Good", { "Content-Type": "text/html" });
//   res.end("<h1> Hello From Node.js Server </h1>");
// });


// // Listening Server
// server.listen(3000, () => {
//   console.log("Server is up on http://localhost:3000");
// });

// ******************************************

// // Create a server

// const server = http.createServer((req, res) => {
//   // Set the response header (status code and content type)
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   // Send a response
//   res.write('Hello, World!\n');
// });

// // The server listens on port 3000
// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

// **************************************

// Request Handling

// const server = http.createServer((req, res) => {

//     if(req.method === "GET" && req.url === "/"){
//         res.writeHead(202, "OK", {"Content-Type": "text/html"})
//         res.write("<h1>Welcome TO The HomePage </h1>")
//     }
//     else if(req.method === "GET" && req.url === "/about"){
//         res.writeHead(202, "OK", {"Content-Type": "text/html"})
//         res.write("<h1>About Us</h1>")
//     }
//     else{
//         res.writeHead(404, "Bad", {"Content-Type": "text/plain"})
//         res.end("404 Request not found")
//     }
// })

// server.listen(3000, () => console.log("Server running on http://localhost:3000"))

// ****************************************

// Sending JSON data

// const server = http.createServer((req, res) => {
//   const data = {
//     name: "abhishek",
//     age: 22,
//   };

//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(202, "OK", { "Content-Type": "application/json" });
//     res.end(JSON.stringify(data));
//   }
// });


// server.listen(3000, () => console.log("Server running on http://localhost:3000"))

