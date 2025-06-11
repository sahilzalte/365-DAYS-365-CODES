const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "admin"
    let searchtext = "search"
    res.render('index', { sitename: sitename, searchtext: searchtext })
})


app.get('/blog/:slug', (req, res) => {
    let blogTitle = "admin why and when"
    let blogContent = "It is a very Good"
    res.render('blogpost', { blogTitle: blogTitle, blogContent: blogContent })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})