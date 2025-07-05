import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teachers.js";

const app = express();

app.listen(3000, () =>
  console.log("Server is listening at http://localhost:3000")
);

// 1. Create routes folder and put your routes in a seperate file
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to router.method.
// 4. Export router
// 5. Import router
// 6. use the (app.use) built-in middleware and provide your routes.

app.use("/students", students);

app.use("/teachers", teachers);
