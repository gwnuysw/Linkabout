var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/loginform', function(req, res, next) {
  res.render('loginform');
});

module.exports = router;
