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
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
router.get('/google', passport.authenticate('google', { scope: [
                'https://www.googleapis.com/auth/plus.login',
                'https://www.googleapis.com/auth/userinfo.email'] }));
// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req.isAuthenticated());
    res.send(req.isAuthenticated());
  }
);
router.get('/signcheck', function(req, res, next){
  let data = {};
  if(req.isAuthenticated()){
    data.isSignin = true;
    data.userName = req.user.nick;
    console.log('authed true : ',JSON.stringify(data));
    res.send(JSON.stringify(data));
  }
  else{
    data.isSignin = false;
    console.log('authed fail : ',JSON.stringify(data));
    res.send(JSON.stringify(data));
  }
  console.log('looooooooooooged?',JSON.stringify(data));
});
router.get('/signout', isLoggedIn, function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
