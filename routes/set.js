const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');

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
