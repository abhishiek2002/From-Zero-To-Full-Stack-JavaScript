import express from "express";

console.clear();

const app = express();

// A query string is the part of a URL that follows the question mark (?).
// It is used to pass data from the client to the server.
// The query string consists of one or more key-value pairs separated by ampersands (&), where each key is separated from its value by an equals sign (=).

// app.get("/product", (req, res) => {
//   res.send(`Response Ok ${req.query.fruit}`);  // if url is /product/?fruit=apple 👉 then res is "Response Ok apple" because value of key "fruit" is "apple".
// });

// using destructing

// app.get("/product", (req, res) => {
//   const { fruit } = req.query;
//   res.send(`Fruit Category is ${fruit}.`);
// });

// using destructure and multiple query strings

app.get("/product", (req, res) => {
  const { fruit, id } = req.query;
  res.send(`Fruit Category is ${fruit} and ID is ${id}`);
});

app.listen(8000, () =>
  console.log("Server is listening on http://localhost:8000")
);
