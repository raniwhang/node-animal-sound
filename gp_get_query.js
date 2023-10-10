// express GET:query
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('GET-query : Hello World')
})
app.get('/user/:id', function (req, res) {
  // params 방식
  // const q = req.params
  // console.log(q);
  // console.log(q.id);
  
  // query 방식
  const q=req.query;
  console.log(q);
  console.log(q.q);
  console.log(q.name);

  res.json({"user id Query " : q.q})
})

app.listen(3000)