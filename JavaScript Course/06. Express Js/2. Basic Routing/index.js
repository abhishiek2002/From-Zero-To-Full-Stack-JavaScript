// const express = require('express');
import express from "express";

const app = express();

// HTTP methods
// GET 👉 Retreive data from server
// POST 👉 Create/Insert Data
// PUT 👉 Completely Update Data
// PATCH 👉 Partially Update Data
// DELETE 👉 Delete Data
// ALL 👉 Any HTTP Request Method

app.get('/', (req, res) => {
    res.send("Home");
})

app.get('/about', (req, res) => {
    res.send("About")
})




app.listen(3000, () => console.log("Server is running on http://localhost:3000"));