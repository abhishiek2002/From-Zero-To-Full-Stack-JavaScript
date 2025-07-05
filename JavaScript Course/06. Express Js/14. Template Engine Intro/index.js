import express from 'express';
import router from './routes/route.js';
// import ejs from 'ejs';

console.clear();

const app = express();

// telling express that we are going to use ejs engine 
app.set('view engine', 'ejs');

app.set('views', './views')

app.use('/', router);

app.listen(3000, () => console.log("Server is listening at http://localhost:3000"));