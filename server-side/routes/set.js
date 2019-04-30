const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let link = require('../schemas/link');
let user = require('../schemas/user');


//응답해줘야 하는 것들 현재셋의 정보, 현재셋과 연결된 셋들, 현재셋의 다큐먼트 링크들. 현재 써져 있는 것들은 다 버려야 할지도 모른다.
router.get('/data/:cursetid', function (req, res, next) {
  let inform;
  Promise.all([
      //상위 카테고리를 검색한다.
      set.find({down: req.params.cursetid }),
      //현재 카테고리를 검색한다.
      set.find({_id: req.params.cursetid}),
      //관련 링크를 검색한다.
      link.find({belong: req.params.cursetid})
  ])
  .then(async ([upset, curset, link]) => {
    inform = {
      upset : upset,
      curset : curset,
      link : link,
      downset : []
    }
    //하위 카테고리도 검색해야 한다.
    //for var in array 방법을 쓰면 배열의 원소가 아니라 프로퍼티들이 쫘악 출력된다;;;
    //map을 써도 안됀다. map(callback)형태인데 callback 자체가 비동기로 실행되어 하위 then 실행후 콜백이 실행된다;;;
    //for of 를 시도해 본다. then 함수에 asyn를 붙이고 pormise에 await붙이니 해결했다.
    console.log('this is down', curset);
    for(let downId of curset[0].down){
        await set.find({_id: downId})
        .then((downset)=>{
          inform.downset.push(downset[0]);
        });
    }
    console.log('상위 셋', upset);
    res.send(JSON.stringify(inform));
  })
});
router.get('/:categoryid', function(req, res, next){

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
  set.find({_id:req.params.cursetid})
  .then((curset)=>{
    console.log('wtf',curset);
    let newset = new set({
      title : req.body.title,
      createdBy : req.user.nick,
      ancestor : req.params.cursetid,
      ancestortitle : curset[0].title,
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
});
module.exports = router;
