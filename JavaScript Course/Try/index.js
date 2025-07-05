import express from 'express';

const app = express();

const port = 3000;

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`)
)

app.get('/', (req, res) =>{
    console.log(req.url);
    console.log(req.statusCode);
    console.log(req.statusMessage);
    console.log(req.method);
    
    res.send('Home 🏠');
})

app.get('/about', (req,res) => {
    if (req.method == "GET"){
        req.statusCode = 200;
        req.statusMessage = 'OK';
    }
    res.send(`<h1> This is About Page </h1>`);

})

app.get('/a?bc?d', (req, res) => {
    res.send('Ok a and c are optional');
})