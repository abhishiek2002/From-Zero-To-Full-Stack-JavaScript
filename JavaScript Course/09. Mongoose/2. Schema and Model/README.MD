Mongoose schema is a blurprint that defines the structure of a document in a MongoDB database collection. It defines the fields, their data types, and any additional options such as default values, validation rules, and indexes.

## Define Schema

```js
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    key: type, // 👉 Shorthand
    keyTwo: { type: String }, // recommended
});
```

Another Example:-

```js
const movieSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongooose.Decimal128,
        required: true,
        validate: (v) => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [
        { value: { type: Stringn}, publish: { type: Date, default: Date.now }},
    ]
})
```

## Model?

A model is a constructor function that represents a collection in MongoDB and defines the schema for each document.

```js
import mongoose from "mongoose";

// Define a schema for a "user" collection
const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    age: Number,
});

// Create a model for the "user" collection using the schema
const User = mongoose.model("User", userSchema);  // it will convert "User" automaticallyi into "users" in lowercase keep that in mind
```