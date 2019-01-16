const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');

router.get('/:cursetid/:cursettitle', function (req, res, next) {
  let puginform;

  Promise.all([
      set.find({ancestor: req.params.cursetid, personal:}),
      set.find({_id: req.params.cursetid})
  ])
  .then(([children, curset]) => {

    puginform = {
      isAuthed : req.isAuthenticated(),
      children : children,
      cursetid : req.params.cursetid,
      cursettitle : req.params.cursettitle,
    }
    if(curset[0].ancestor === "undefined"){
      puginform.uppersetid = cursetid;
      puginform.uppersettitle = cursettitle;
      res.render('set',puginform);
    }
    else{
      puginform.uppersetid = curset[0].ancestor;
      puginform.uppersettitle = curset[0].ancestortitle;
      res.render('public/set', puginform);
    }
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
    res.render('public/newsetform', puginform);
  });
});

router.post('/newset/:cursetid/:cursettitle', isLoggedIn, function (req, res, next) {
  let newset = new set({
    title : req.body.title,
    createdBy : req.user.nick,
    ancestor : req.params.cursetid,
    ancestortitle : req.params.cursettitle,
    personal : req.user._id,
    views : 0,
  });
  newset.save()
  .then((result)=>{
    console.log(result);
    res.redirect('/set/'+req.params.cursetid+'/'+req.params.cursettitle);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
