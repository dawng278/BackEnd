const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('HomePage.ejs')
  })

  module.exports = router; //exports default