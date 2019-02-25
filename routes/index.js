var express = require('express');
var router = express.Router();
let set = require('../schemas/set');

/* GET home page. */
router.get('/', function (req, res, next) {
  //데이터베이스를 만드는 단계
  set.find(({title: 'LinkAbout', createdBy: '이석원'}))
  .then((root)=>{
    res.redirect('set/'+root[0]._id);
  })
  .catch(()=>{
    let root = new set({
      title : 'LinkAbout',
      createdBy : '이석원',
      views:0,
    })
    let people = new set({
      title : 'People',
      createdBy : '이석원',
      views: 0,
    })
    console.log('이라ㅓ매댜ㅣㅁ낭ㄹ 에러');
    root.down = [...root.down, people._id];
    return [people.save(), root];
  })
  .then(([result, root])=>{
    return root.save();
  })
  .then((result)=>{
    res.redirect('set/'+result._id);
  });
});

module.exports = router;
