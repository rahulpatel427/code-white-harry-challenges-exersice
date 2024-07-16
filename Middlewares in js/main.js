const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

// app.use(express.static("public"));


// it is a middleware 1 (request aae response diya or next() middleware ke pass pahucha diya..)
app.use((req, res, next) => {
  console.log(req.headers)
  req.rahul = 27
  // ab yha pr middleware ka mtlb hota he ki response ke phle hi hm change kr skte he ... jese hi request milti he . tb hi 
  fs.appendFileSync("text.txt", `${Date.now()} is a get ${req.method} \n`)
  console.log(" middleware 1 .")

  // res.send('Hello Home page jay ma renuka.!')
  next();
})

// it is a middleware 2 
app.use((req, res, next) => {
  console.log("middleware 2 .")
  // res.send('Hello Home page jay ma renuka.!')
  next();
})



app.get('/', (req, res) => {
  console.log("hey its a about.")
  res.send('Hello it is a About page.!')
})
app.get('/contact', (req, res) => {
  console.log("hey its a contact.")
  res.send('Hello it is a contact page.!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})