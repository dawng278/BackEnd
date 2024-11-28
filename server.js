const express = require('express') // này là commonjs
// import express from 'express'; // này là es modules

const app = express() // app express
const port = 8080 // port

// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})