
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// ab agr mujhe template ka index.html ko serve krna he to res.sendFile ka us krke kr skte he. __dirname
app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  let arr = ["rahul", 43, 5, 5634, 4]
  // res.sendFile("views/index.html", { root: __dirname })  // root: __dirname is important
  res.render("index", { siteName: siteName, searchText: searchText, arr }) // secend wale ko pass krte he..
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle = "Adidas why and when?"
  let BlogContent = "It's a very good brand."
  res.render("templates/blogpost.html", { blogTitle: blogTitle, BlogContent: BlogContent }) // root: __dirname is important
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})