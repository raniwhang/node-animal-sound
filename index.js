// console.log('Hello');


// figlet //
// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

/* */ 
// express //
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000) 

// app.listen(3000) 서버 포트 3000을 항상 듣고 있다.
// get 방식(주소줄에 보이는 방식)으로 온 /(루트 기본페이지)를 라우팅(페이지로 설정)한 후
// function (req, res) res 에 헬로월드를 보내라.

/* */ 
// <Express 예제 -멍멍, 야옹>
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/dog', function (req, res) {
  // res.send('강아지 멍멍');
  // res.send('<h1>멍멍</h1>');
  // res.send('<a href="http://daum.net">다음</a>');
  res.send({'sound':'멍멍제이슨'}) // 또는 res.json({'sound':'멍멍제이슨'})
})
app.get('/cat', function (req, res) {
  // res.send('고양이 야옹')
  res.send({'sound':'야옹제이슨'});
})

app.listen(3000)


/* */ 
// express - GET: params, query 



