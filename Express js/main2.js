const express = require('express')
const app = express()
const port = 3000


app.use(express.static("public")); // yha public ke bjay kuch or bhi ho skta he.. public just a name but this is a good standerd 
// ab mujhe kahi files ko apload krna he to kya me. pura backend source code thoda na dunga me  
// me sirf public files hi dunga or yhi pr kamal aata he express js kyuki iska use krke hm ek files ko de skte jo kam ki he vo baki code hmare pass hi rhega..


// app.get , app.put, app.delete and app.post(path, handler)
app.get('/', (req, res) => {
  res.send('jay ma renuka!')
})

// ye ek yha hmne slug name ka variable create kr liya he. juska mtlb he ki browser ke url me jo bhi likhe vo print hoga
app.get('/home/:slug', (req, res) => {
  res.send(`jay ma ${req.params.slug}!`)
  console.log(req.params);
})



// app.get('/home', (req, res) => {
//   res.send('jay ma renuka Home!')
// })

// app.get('/about', (req, res) => {
//   res.send('jay ma renuka About!')
// })

// app.get('/blog', (req, res) => {
//   res.send('jay ma renuka Contact!')
// })
// app.get('/contact ', (req, res) => {
//   res.send('jay ma renuka Contact!')
// })

//ese to hm no. of pages bnate jaege or isi ko solve krne ke liye or code ko reusable banane ke liye Express ki methods ka use krenge...


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})