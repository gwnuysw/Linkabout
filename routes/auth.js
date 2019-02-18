var express = require('express');
var router = express.Router();
const passport = require('passport');
let set = require('../schemas/set');
const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');
/* GET login page. */

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao',{
    failureRedirect: '/',
  }), (req, res) => {
    res.redirect('/');
});

router.get('/signinpage',  isNotLoggedIn, function(req, res, next) {
  res.render('public/loginpage');
});
router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
