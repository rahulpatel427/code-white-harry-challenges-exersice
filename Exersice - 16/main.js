const express = require('express')


const app = express()
const port = 3000
app.set('view engine', 'ejs');
const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1)) // Math.floor means ki ek integer hoga number floate na.. aye.
  return arr[rno];
}

const mongoose = require('mongoose');
const Employee = require('./models/Employee');
const { name } = require('ejs');
const employee = require('./models/Employee');
mongoose.connect('mongodb://127.0.0.1:27017/Company'); // database name is Company

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});


app.get('/generate', async (req, res) => {
  //Generate a rendom data
  // clear the collection of employee 
  await employee.deleteMany({})
  let randomName = ["Rahul", "Yogesh", "Rohit", "Sahil",];
  let randomCites = ["Khar kalan", "Khandwa", "Indore", "Betul"];
  let randomLang = ["java", "js", "Python", "C++"];


  for (let index = 0; index < 10; index++) {
    let a = await Employee.create({
      name: getRandom(randomName),
      salary: Math.floor(Math.random() * 2400000),
      language: getRandom(randomLang),
      city: getRandom(randomCites),
      isManager: (Math.random > 0.5) ? true : false,
    });
    console.log(a)
    // await e.save() // yha pr await na.. karke hum uper hi await kr skte he.
  }
  res.render('index', { foo: 'FOO' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})