import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "home") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile(".\\05. Node Js\\12. Serving Pages\\Files\\index.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile(".\\05. Node Js\\12. Serving Pages\\Files\\about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.end("404 Page Not Found");
  }
});

server.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
