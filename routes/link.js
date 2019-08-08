const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');
let link = require('../schemas/link');

router.get('/newlinkform/:cursetid', isLoggedIn, function (req, res, next) {
  let puginform;

  set.find({_id: req.params.cursetid})
  .then((curset) => {
    puginform = {
      isAuthed : req.isAuthenticated(),
      curset : curset[0],
    };
    if(req.isAuthenticated()){ //현재 로그인 사용자와 프로필 주인을 구별하기위함 mypage접속을 위해 필요
      puginform.loginid = req.user._id;
    }
    res.render('public/newlinkform', puginform);
  });
});

router.post('/newlink/:cursetid', isLoggedIn, function (req, res, next) {
  let newlink = new link({
    title : req.body.title,
    createdBy : req.user.nick,
    belong : req.params.cursetid,
    text : req.body.text,
    author : req.body.author,
    link : req.body.link,
    linktype : req.body.linktype,
    views : 0,
  });
  newlink.save()
  .then((result)=>{
    console.log(result);
    if(req.body.linktype == 'document'){
      res.redirect('/link/document/'+req.params.cursetid);
    }
    else{
      res.redirect('/link/community/'+req.params.cursetid);
    }
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
