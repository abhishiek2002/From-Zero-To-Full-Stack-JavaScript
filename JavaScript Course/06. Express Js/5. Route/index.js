import express from "express";

const app = express();

// console.clear();

// Use Postman for different http method

// app.get("/student", (req, res) => {
//   res.send("All students");
// });

// app.post("/student", (req, res) => {
//   res.send("Add new student");
// });
// app.put("/student", (req, res) => {
//   res.send("Update student");
// });
// app.delete("/student", (req, res) => {
//   res.send("Remove student");
// });

// ----------------------------- Refactor

// app.route()---------------------------

// app.route returns a instance of a single route,
// which you can then use to handle HTTP verbs,
// with optional middleware.
// We use (app.route) to avoide duplicate code.

app
  .route("/student")
  .get((req, res) => res.send("All students"))
  .post((req, res) => res.send("Add new student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Remove Student"));

app.listen(8000, () =>
  console.log("Server is listening on http://localhost:8000")
);
