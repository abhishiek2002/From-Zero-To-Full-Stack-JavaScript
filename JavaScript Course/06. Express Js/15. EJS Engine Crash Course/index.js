import express from 'express';
import router from './routes/route.js';

console.clear()

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', router);

app.listen(3000, () => console.log("Server is listening at http://localhost:3000"))