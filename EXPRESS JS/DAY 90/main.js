// Middeleware: express Concept
const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require('fs')

// app.use(express.static('public'));

app.use('/blog', blog)

// Middeleware 1 --> Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.sahil = 'I am Sahil';
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`, { flag: 'a' });
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send('Hacked by Middeleware 1')
    next()
})

// Middeleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.sahil = 'I am Aman Bhai'
    next()
})

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/about', (req, res) => {
    res.send('Hello About!' + req.sahil)
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})