// 동물소리 API 서버만들기 - json
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('API-animal sound JSON - Hello World')
})
app.get('/sound/:name', function (req, res) {
  const {name} = req.params;
  console.log(name);

  res.json({sound:'멍멍'})
})

app.listen(3000)
