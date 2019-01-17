const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');

router.get('/:cursetid', function (req, res, next) {
  let puginform;

  Promise.all([
      set.find({ancestor: req.params.cursetid, personal: null}),
      set.find({_id: req.params.cursetid})
  ])
  .then(([children, curset]) => {
    console.log('사용자', curset[0])
    puginform = {
      isAuthed : req.isAuthenticated(),
      children : children,
      curset : curset[0],
    }
    if(req.isAuthenticated()){
      puginform.userid = req.user._id;
    }
    if(curset[0].ancestor === "undefined"){
      puginform.uppersetid = curset[0]._id;
      puginform.uppersettitle = curset[0].title;
      res.render('public/set',puginform);
    }
    else{
      puginform.uppersetid = curset[0].ancestor;
      puginform.uppersettitle = curset[0].ancestortitle;

      res.render('public/set', puginform);
    }
  });
});

router.get('/newsetform/:cursetid', isLoggedIn, function (req, res, next) {
  let puginform;

  set.find({_id: req.params.cursetid})
  .then((curset) => {
    puginform = {
      isAuthed : req.isAuthenticated(),
      curset : curset[0],
    }
    res.render('public/newsetform', puginform);
  });
});

router.post('/newset/:cursetid', isLoggedIn, function (req, res, next) {
  let passcurset;
  set.find({_id:req.params.cursetid})
  .then((curset)=>{
    passcurset = curset;
  });
  let newset = new set({
    title : req.body.title,
    createdBy : req.user.nick,
    ancestor : req.params.cursetid,
    ancestortitle : passcurset[0].ancestortitle,
    views : 0,
  });
  newset.save()
  .then((result)=>{
    console.log(result);
    res.redirect('/set/'+req.params.cursetid);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
