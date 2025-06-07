const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('Hello about')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})

// app.get('/blog/:slug/:second', (req, res) => {
//     // logic to featch {slug} from the db
//     res.send(`Hello ${req.params.slug} and ${req.params.second}`)
// })
app.get('/blog/:slug', (req, res) => {
    // logic to featch {slug} from the db
    console.log(req.params)    
    console.log(req.query)    
    res.send(`Hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to featch intro to js
//     res.send('Hello Intro to js')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to featch intro to js
//     res.send('Hello Intro to python')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})