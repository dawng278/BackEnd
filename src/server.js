const express = require('express') // này là commonjs
const path = require('path'); 
require('dotenv').config()
// các dòng này là import thư viện vào để sử dụng :D
// import express from 'express'; // này là es modules

const app = express() // app express
const port = process.env.PORT || 8888; // port => hardcore nhập trực tiếp // ví dụ nếu mốt nhập cái nào thì phải sửa cái đó :v rất bất tiện
// dùng file ENV
const hostname = process.env.HOST_NAME;



// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public')));

// khai báo route
app.get('/', (req, res) => {
  res.render('sample.ejs')
})

app.get('/abc', (req, res) => {
  res.send('<h1>Check ABC</h1>')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})