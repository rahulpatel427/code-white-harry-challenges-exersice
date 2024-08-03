const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
const port = 3000
const bodyparser = require('body-parser')


require('dotenv').config()
// console.log(process.env.MONGO_URI) // remove this after you've confirmed it is working
app.use(bodyparser.json())

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passMan';
client.connect();
// it is a Get all the passwords
app.get('/', async (req, res) => {

  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  console.log('Found passwords =>', findResult);
  res.json(findResult);
})

// save all the passwords
app.post('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.insertOne(password);
  console.log('Found passwords =>', findResult);
  res.send({ success: true, result: findResult });
})

// Delete password by id
app.delete('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.deleteOne(password);
  console.log('Found passwords =>', findResult);
  res.send({ success: true, result: findResult });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})