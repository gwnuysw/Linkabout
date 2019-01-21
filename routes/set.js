const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');

router.get('/:cursetid', function (req, res, next) {
  let puginform;

  Promise.all([
      set.find({ancestor: req.params.cursetid, personal : null}),
      set.find({_id: req.params.cursetid})
  ])
  .then(([children, curset]) => {
    console.log('사용자', curset[0])
    puginform = {
      isAuthed : req.isAuthenticated(),
      children : children,
      curset : curset[0],
    }
    if(req.isAuthenticated()){ //현재 로그인 사용자와 프로필 주인을 구별하기위함 mypage접속을 위해 필요
      puginform.loginid = req.user._id;
    }
    console.log("오류발견!!!",curset[0].ancestor == "undefined");
    if(curset[0].ancestor === "undefined"){//부모가 없다는 것은 최상위 개체 LinkAbout이라는 것
      puginform.uppersetid = curset[0]._id;
      puginform.uppersettitle = curset[0].title;
      res.render('public/set',puginform);
    }
    else{//부모가 있다면 그 부모 아이디와 타이틀을 넘긴다.
      console.log("실행한다? 안한다?");
      console.log("그래서 값은?", curset[0]);
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
    if(req.isAuthenticated()){ //현재 로그인 사용자와 프로필 주인을 구별하기위함 mypage접속을 위해 필요
      puginform.loginid = req.user._id;
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
