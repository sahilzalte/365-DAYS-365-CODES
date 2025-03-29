const express = require('express');
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express();
const PORT = 3000;


app.use(express.static('public'));
app.use('/blog', blog)
app.use('/shop', shop)


app.get('/', (req, res) => {
    console.log("Hey this is get request");
    res.send('Hello, World 2');
}).post('/', (req, res) => {
    console.log("Hey this is post request");
    res.send('Hello, World post !');
})

app.put('/', (req, res) => {
    console.log("Hey this is put request");
    res.send('Hello, World put !');
})


app.get("/index", (req, res) => {
    console.log("Hey its index here !");
    res.sendFile('templates/index.html', { root: __dirname });
})


app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["sahil", "Aman"] })
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})