const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const shop = require('./routes/shop')


app.use(express.static('public'))

app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("hello")
})

app.post('/', (req, res) => {
  console.log("Hey its a Post request")
  res.send('Hello World Post !')
})

app.put('/', (req, res) => {
  console.log("Hey its a Put request")
  res.send('Hello World Put !')
})
app.get('/index', (req, res) => {
  console.log("Hey its Index Page")
  res.sendFile('templates/index.html', { root: __dirname })
})

app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  
