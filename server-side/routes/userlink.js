const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');
let link = require('../schemas/link');

router.get('/content/:cursetid/:linkid/:userid',function(req,res,next){
  let puginform;
  Promise.all([
    link.find({_id:req.params.linkid}),
    set.find({_id:req.params.cursetid})
  ])
  .then(([content, curset])=>{
    puginform = {
      isAuthed: req.isAuthenticated(),
      curset : curset[0],
      content: content[0],
      uppersetid: curset[0].ancestor,
      uppersettitle: curset[0].ancestortitle,
      userid : req.params.userid,
    }
    console.log(content[0]);
    res.render('public/linkcontent',puginform);
  });
});

router.get('/community/:cursetid/:userid', function (req, res, next){
  let puginform;

  Promise.all([
    link.find({belong : req.params.cursetid, linktype : 'community'}),
    set.find({_id: req.params.cursetid})
  ])
  .then(([links, curset])=>{
    puginform = {
      isAuthed : req.isAuthenticated(),
      curset : curset[0],
      links : links,
      uppersetid: curset[0].ancestor,
      uppersettitle: curset[0].ancestortitle,
      userid : req.params.userid,
    }
    res.render('public/linklist', puginform);
  })
  .catch(()=>{
  });
});

router.get('/document/:cursetid/:userid', function (req, res, next){
  let puginform;

  Promise.all([
    link.find({belong : req.params.cursetid, linktype : 'document'}),
    set.find({_id: req.params.cursetid})
  ])
  .then(([links, curset])=>{
    puginform = {
      isAuthed : req.isAuthenticated(),
      curset : curset[0],
      links : links,
      uppersetid: curset[0].ancestor,
      uppersettitle: curset[0].ancestortitle,
      userid : req.params.userid,
    }
    if(req.isAuthenticated()){ //현재 로그인 사용자와 프로필 주인을 구별하기위함 mypage접속을 위해 필요
      puginform.loginid = req.user._id;
    }
    res.render('public/linklist', puginform);
  })
  .catch(()=>{
  });
});

router.get('/newlinkform/:cursetid/:userid', isLoggedIn, function (req, res, next) {
  let puginform;

  set.find({_id: req.params.cursetid})
  .then((curset) => {
    if(req.user._id == req.params.userid){
      puginform = {
        isAuthed : req.isAuthenticated(),
        loginid : req.user._id,
        curset : curset[0],
        userid : req.params.userid,
      };
      res.render('public/newlinkform', puginform);
    }
    else{
      res.redirect('/userset/'+req.params.cursetid+"/"+req.params.userid);
    }
  });
});

router.post('/newlink/:cursetid/:userid', isLoggedIn, function (req, res, next) {
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
    if(req.body.linktyp == 'document'){
      res.redirect('/userlink/document/'+req.params.cursetid+"/"+req.params.userid);
    }
    else{
      res.redirect('/userlink/community/'+req.params.cursetid+"/"+req.params.userid);
    }

  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
