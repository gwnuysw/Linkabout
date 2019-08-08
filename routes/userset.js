const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');
let link = require('../schemas/link');

router.get('/:cursetid/:userid', function (req, res, next) {
  let puginform;

  Promise.all([
      link.find({_id:req.params.linkid}),
      set.find({ancestor: req.params.cursetid, personal : req.params.userid}),
      set.find({_id: req.params.cursetid})
  ])
  .then(([links, children, curset]) => {
    console.log('사용자', curset[0])
    puginform = {
      isAuthed : req.isAuthenticated(),
      children : children,
      curset : curset[0],
      links: links,
      userid : req.params.userid,
    }
    puginform.userid = req.params.userid;
    //부모가 있다면 그 부모 아이디와 타이틀을 넘긴다.
    puginform.uppersetid = curset[0].ancestor;
    puginform.uppersettitle = curset[0].ancestortitle;
    res.render('public/set', puginform);
  });
});

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

router.post('/newset/:cursetid/:userid', isLoggedIn, function (req, res, next) {
  let getcurset;
  set.find({_id:req.params.cursetid})
  .then((curset)=>{
    let newset = new set({
      title : req.body.title,
      createdBy : req.user.nick,
      ancestor : req.params.cursetid,
      ancestortitle : curset[0].title,
      personal : req.user._id,//user스키마의 id
      views : 0,
    });
    newset.save()
    .then((result)=>{
      console.log('생성 성공',result);
      res.redirect('/userset/'+req.params.cursetid+"/"+req.params.userid);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
  });
});
module.exports = router;
