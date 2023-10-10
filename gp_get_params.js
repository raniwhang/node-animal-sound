// express GET:params
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/user/:id', function (req, res) {
  const q = req.params
  console.log(q);
  console.log(q.id);
  res.json({"user id" : q.id})
})

app.listen(3000)