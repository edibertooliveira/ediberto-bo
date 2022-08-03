const express = require('express');
const data = require('../public/data.json');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', data);
});

module.exports = router;
