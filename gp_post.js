// express post
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// post
app.use(express.json());
app.post('/user/:id', function (req, res) {
  const p = req.params
  console.log(p);
  const b = req.body;
  console.log(b);

  res.json({"message" : "Hello Post!"})
})

app.listen(3000)