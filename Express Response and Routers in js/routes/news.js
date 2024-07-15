//5. Express Router

const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send(`I'm a news page!`)
})


// define the about route
router.get('/news', (req, res) => {
  res.send('About news')
})

module.exports = router