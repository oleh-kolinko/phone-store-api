const express = require('express');
const router  = express.Router();
const Phone = require('../models/phone.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});



module.exports = router;
