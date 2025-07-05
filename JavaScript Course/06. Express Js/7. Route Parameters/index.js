import express from "express";

const app = express();

console.clear();

// Route Params

// ecommerce/products/iphone/:iphoneid

app.get("/student/delete/:id", (req, res) => {
  // req.params is an object that has params as key and their values
  res.send(req.params.id);
  // res.send("User deleted.")
});

// app.get("/ecom/products/iphone/:model", (req, res) => {
//   res.send(`Iphone ${req.params.model} Pro Max`);
// });

// using destructuring object

app.get("/ecom/products/iphone/:model", (req, res) => {
  const { model } = req.params;
  res.send(`Iphone ${model} Pro Max`);
});

// Multiple params

app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product Category ${category} and Product ID ${id}`);
});

//   -------------------------------------------------------------

// The app.params() function is used to add the callback triggers to route parameters.
// It is commonly used to check for the existence of the data requested related to the route param.
// app.param(name, callback)

app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

// whenever "id" name parameter declare in route then this app.param("id", ...) callback method triggers first

app.get("/user/:id", (req, res) => {
  console.log("This is User ID Patch");
  res.send("Response OK");
});

app.listen(8000, () =>
  console.log("Server is listening at http://localhost:8000")
);
