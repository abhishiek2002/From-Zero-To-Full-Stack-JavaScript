import express from "express";
import userCredentials from "./Middlewares/log.js";

console.clear();

const app = express();

/*
  Request 🙂

  Middleware 🤘

  Response 🙂
*/

// A middleware is just a javascript function between request and response
// Which Takes 3 parameters (req, res, next)

// app.method(route, function, callback);


// app.get("/", userCredentials, (req, res) => {
//     res.send("Hello Admin")
// });

// ---------------------------- Use of app.use() method for triggering middleware before every response by server


// app.use("/about", userCredentials);

app.use(userCredentials);

app.get("/", (req, res) => {
    res.send("Hello Admin")
});

app.get("/about", (req, res) => {
    res.send("About Section")
});

app.get("/contact", (req, res) => {
    res.send("Contact Section")
});


app.listen(8000, () =>
  console.log("Server is listening on http://localhost:8000")
);
