const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})

// define the about route
router.get('/blog', (req, res) => {
  res.send('About Blogs')
})
router.get('/blogpost/:slug', (req, res) => {
  res.send(`Blogpost For : ${req.params.slug}`)
})
// router.get('/about', (req, res) => {
//   res.send('About birds')
// })

module.exports = router 