const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');


let currentSet = '5c358828c7f4dc540bcda0df';

router.get('/newsetform/:cursetid/:cursettitle', isLoggedIn, function (req, res, next) {
  console.log('currentset???', req.params.cursetid, req.params.cursettitle);
  set.find({_id: currentSet})
  .then((sets)=>{
    let puginform = {
      isAuthed: req.isAuthenticated(),
      set: sets[0].title,
    };
    res.render('newsetform',puginform);
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});

router.get('/subset/:setid/:settitle', function (req, res, next) {
  console.log('set id is ', req.params.setid, req.params.settitle);
  set.find({ancestor: req.params.setID})
  .then((sets)=>{
    let puginform = {
      isAuthed : req.isAuthenticated(),
      sets : sets,
      title : req.params.setTITLE,
      cursetid : req.params.setid,
      cursettitle : req.params.settitle,
    }
    res.render('set', puginform);
  });
});

router.post('/newset', isLoggedIn, function (req, res, next) {
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
