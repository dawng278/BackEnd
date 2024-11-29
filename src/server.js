const express = require('express') // này là commonjs
const path = require('path');
// import express from 'express'; // này là es modules

const app = express() // app express
const port = 8080 // port

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// khai báo route
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('sample.ejs')
})

app.get('/abc', (req, res) => {
  res.send('<h1>Check ABC</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})