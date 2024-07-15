const express = require('express')
const app = express()
const port = 3000


// app.get , app.put, app.delete and app.post(path, handler)
app.get('/', (req, res) => {
  res.send('jay ma renuka!')
})

// ye ek yha hmne slug name ka variable create kr liya he. juska mtlb he ki browser ke url me jo bhi likhe vo print hoga
app.get('/home/:slug', (req, res) => {
  res.send(`jay ma ${req.params.slug}!`)
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