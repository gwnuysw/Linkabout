var express = require('express');
var router = express.Router();
const passport = require('passport');
/* GET login page. */

router.get('/loginform', function(req, res, next) {
  res.render('loginform');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao',{
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/');
});

module.exports = router;
