const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const news = require('./routes/news')

app.use(express.static("public"));
app.use('/news', news)

// it is a get request 
app.get('/', (req, res) => {
  console.log("hey its a get request.")
  res.send('Hello World!')
})


// it is a post request 
app.post('/', (req, res) => {
  console.log('Hello This is a post request clg!')
  res.send('Hello This is a post request!') // testing html page in public folder
})

// it is a put request 
app.put('/', (req, res) => {
  console.log('Hello This is a put request clg!')
  res.send('Hello This is a put request!') // testing html page in public folder
})


// esa bhi hota...

// it is a get request 
// app.get('/', (req, res) => {
//   console.log("hey its a get request.")
//   res.send('Hello World!')
// }).post('/', (req, res) => {
//   console.log('Hello This is a post request clg!')
//   res.send('Hello This is a post request!') // testing html page in public folder
// }).put('/', (req, res) => {
//   console.log('Hello This is a put request clg!')
//   res.send('Hello This is a put request!') // testing html page in public folder
// })


app.get("/index", (req, res) => {
  console.log("hello its a index page") // console print
  res.sendFile(`template/index.html`, { root: __dirname }) // browser print
})

// create a api
app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, name: ["ram", "shyam", "ma renuka",], })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})