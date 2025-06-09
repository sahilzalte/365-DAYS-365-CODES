const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Shop home page')
})

// define the about route
router.get('/Shop', (req, res) => {
  res.send('About Shops')
})
router.get('/Shoppost/:slug', (req, res) => {
  res.send(`Shoppost For : ${req.params.slug}`)
})

module.exports = router 