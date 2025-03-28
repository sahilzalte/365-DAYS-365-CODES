const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello, World !');
});

app.get('/about', (req, res) => {
    res.send('Hello, about us!');
});

app.get('/contact', (req, res) => {
    res.send('Hello, contact me !');
});

app.get('/blog', (req, res) => {
    res.send('Hello, blog !');
});

app.get('/blog/:slug', (req, res) => {
    // Logic to fetch {slug} from the database
    console.log(req.params) // Will Output  
    res.send(`hello ${req.params.slug} and ${req.params.second} !`);
});

// app.get('/blog/intro-to-js', (req, res) => {
//     // Logic to fetch intro to js from the database
//     res.send('Hello, javaScript !');
// });

// app.get('/blog/intro-to-python', (req, res) => {
//     // Logic to fetch intro to python from the database
//     res.send('Hello, python !');
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

