//5. Express Router

const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send(`I'm a home page!`)
})


// define the about route
router.get('/about', (req, res) => {
  res.send('About page')
})

// define the blogpost route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blog for blogpost ${req.params.slug}`)
})

module.exports = router