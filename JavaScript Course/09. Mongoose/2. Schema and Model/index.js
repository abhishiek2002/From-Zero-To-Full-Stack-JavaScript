import express from 'express';
import connectDB from './db/connectDB.js';
import { createDoc, insertManyDoc, allDoc, singleDoc, docWithField, updateById, updateMany, deleteDoc } from './models/Movies.js';

const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies';

console.clear();

// connect database
connectDB(DATABASE_URL);

// inserting

// createDoc();

// insertManyDoc();

// allDoc();

// singleDoc();

// docWithField();

// updateById('671210d88c1a29ec3f5c4997');

// updateMany();

deleteDoc();

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))