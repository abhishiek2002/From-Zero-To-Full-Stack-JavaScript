import express from "express";

const app = express();

// console.clear()

// single callback

app.get('/single-cb', (req, res) => {
    res.send("Single Callback");
})

// More then one callback
// next() method is neccessary to jump over next callback

app.get('/db-cb', (req, res, next) => {
    console.log("Single Callback");
    next();
}, (req, res) => {
    res.send("Qouble callback");
})

// Array of callback

const cb1 = (req, res, next) => {
    console.log("First callback array");
    next()
}

const cb2 = (req, res) => {
    res.send("Array of callbacks");
}

app.get('/cb-array', [cb1, cb2])

// Crazyness

app.get('/craziness', (req, res, next) => {
    console.log("First callback");
    next();
}, [cb1, cb2])

app.listen(3000, () => console.log("Server is listening at http://localhost:3000"));