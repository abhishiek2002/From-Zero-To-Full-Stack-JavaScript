import http from "http";

//   / homepage
//   /about
//   /contact

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(202, "OK", { "Content-Type": "text/html" });
    res.write("<h1> This is Home Page </h1>");
    res.end("<a href= '/contact' > Contact Us </a> ");
  } else if (req.method === "GET" && req.url === "/about") {
    res.end("<h1> About</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Us</h1>");
  } else {
    res.writeHead(404, "Bad");
    res.end("404 Page Not Found!");
  }
  
});

server.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
