var express = require('express');
var router = express.Router();
let set = require('../schemas/set');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/set/5c358828c7f4dc540bcda0df');
});

module.exports = router;
