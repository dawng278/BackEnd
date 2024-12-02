const express = require('express') // này là commonjs
const path = require('path'); 
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
// các dòng này là import thư viện vào để sử dụng :D
// import express from 'express'; // này là es modules

const app = express() // app express
const port = process.env.PORT || 8888; // port => hardcore nhập trực tiếp // ví dụ nếu mốt nhập cái nào thì phải sửa cái đó :v rất bất tiện
// dùng file ENV
const hostname = process.env.HOST_NAME;


// config template engine
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})