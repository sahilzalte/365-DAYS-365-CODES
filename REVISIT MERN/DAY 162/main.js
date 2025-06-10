const express = require('express')
const app = express()
const port = 3000

// Middleware
// app.use(express.static('public'))

// Middleware 1
app.use((req, res, next) => {
    console.log('m1')
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('about !')
})

app.get('/contact', (req, res) => {
    res.send('contact !')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})