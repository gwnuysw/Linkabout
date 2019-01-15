const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');

router.get('/:cursetid/:cursettitle', function (req, res, next) {
  let puginform;

  Promise.all([
      set.find({ancestor: req.params.cursetid}),
      set.find({_id: req.params.cursetid})
  ])
  .then(([children, curset]) => {
    puginform = {
      isAuthed : req.isAuthenticated(),
      children : children,
      cursetid : req.params.cursetid,
      cursettitle : req.params.cursettitle,
      uppersetid : curset[0].ancestor,
      uppersettitle : curset[0].ancestortitle,
    }
    res.render('set',puginform);
  });
});

router.get('/newsetform/:cursetid/:cursettitle', isLoggedIn, function (req, res, next) {
  let puginform;

  set.find({_id: req.params.setid})
  .then((curset) => {
    puginform = {
      isAuthed : req.isAuthenticated(),
      cursetid : req.params.cursetid,
      cursettitle : req.params.cursettitle,
    }
    res.render('newsetform', puginform);
  });
});

router.post('/newset/:cursetid/:cursettitle', isLoggedIn, function (req, res, next) {
  let newset = new set({
    title : req.body.title,
    createdBy : req.user.nick,
    ancestor : req.params.cursetid,
    ancestortitle : req.params.cursettitle,
    views : 0,
  });
  newset.save()
  .then((result)=>{
    console.log(result);
    res.redirect('/subset/'+req.params.cursetid+'/'+req.params.cursettitle);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
