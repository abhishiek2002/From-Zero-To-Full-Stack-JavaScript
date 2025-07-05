import express from "express";
import student from "./routes/student.js";

console.clear();

const app = express();

// Controllers can group related request handling logic seperately.
// Instead of defining all of your request handling logic as callback in route or
// in route files, you may wish to organize this behavior using controllers modules.

app.use('/students', student);

app.listen(8000, () => console.log("Server is listening on http://localhost:8000"));