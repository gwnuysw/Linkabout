const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');

router.get('/newsetform/:cursetid/:userid', isLoggedIn, function (req, res, next) {
  let puginform;

  set.find({_id: req.params.cursetid})
  .then((curset) => {
    puginform = {
      isAuthed : req.isAuthenticated(),
      userid : req.params.userid,
      curset : curset[0],
    }
    res.render('public/newsetform', puginform);
  });
});

router.post('/newset/:cursetid', isLoggedIn, function (req, res, next) {
  let getcurset;
  set.find({_id:req.params.cursetid})
  .then((curset)=>{
    let newset = new set({
      title : req.body.title,
      createdBy : req.user.nick,
      ancestor : req.params.cursetid,
      ancestortitle : curset[0].ancestortitle,
      personal : req.user._id,
      views : 0,
    });
    newset.save()
    .then((result)=>{
      console.log('생성 성공',result);
      res.redirect('/set/'+req.params.cursetid);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
  });
});
module.exports = router;
