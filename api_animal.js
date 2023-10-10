// 동물소리 API 서버만들기
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('API-animal sound - Hello World')
})
app.get('/dog', function (req, res) {
  res.json({sound:'멍멍'})
})
app.get('/cat', function (req, res) {
  res.json({sound:'야옹'})
})

app.listen(3000)
