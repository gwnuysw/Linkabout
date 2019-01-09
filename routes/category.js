let express = require('express');
let router = express.Router();
let currentSet = '5c358828c7f4dc540bcda0df';
let set = require('../schemas/set');
let user = require('../schemas/user');
const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

router.get('/newcategoryform', isLoggedIn, function (req, res, next) {
  set.find({_id: currentSet})
  .then((sets)=>{
    let puginform = {
      isAuthed: req.isAuthenticated(),
      title: sets[0].title,
    };
    res.render('newcategoryform',puginform);
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});

router.post('/newcategory', isLoggedIn, function (req, res, next) {
  let newset = new set({
    title : req.body.title,
    createdBy : req.user.nick,
    ancestor : currentSet,
    views : 0,
  });

  newset.save()
  .then((result)=>{
    console.log(result);
    res.redirect('/');
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
