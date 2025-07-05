import express from "express";
import products from "./product.js";

console.clear();

const app = express();

app.get("/product", (req, res) => {
  res.json(products);
});

app.listen(8000, () =>
  console.log("Server is listening on http://localhost:8000")
);
