import express from "express";
import bodyParser from "body-parser";

const app = express();

// Node.js body-parse is a body parsing middleware.

// npm i body-parser

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

app.use(bodyParser.json())

app.post("/post", (req, res) => {
  //   res.send("Data Posted");
  const { name, age, field } = req.body;

  res.send(`${name}, ${age}, ${field}`);
});

app.listen(3000, () =>
  console.log("server is listening at http://localhost:3000")
);
