import express from "express";

const app = express();

const port = 3000;

app.use('/', (req, res) => {
    res.end('Hello Express');
})

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))