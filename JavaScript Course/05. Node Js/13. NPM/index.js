import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(202, "OK", { "Content-Type": "text/html" });
  res.end("<h1> Hello from Abhishek!!! </h1>");
});

server.listen(3000, () => console.log("Server is running on http://localhost:3000"));