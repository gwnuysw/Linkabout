var express = require('express');
var router = express.Router();
let set = require('../schemas/set');
let template = require('../views/Template');
let ssr = require('../views/server/server');
/* GET home page. */
router.get('/', function (req, res, next) {
  //데이터베이스를 만드는 단계
  set.find({title: 'LinkAbout', createdBy: '이석원'})
  .then((root)=>{
    console.log('set is exsist',root);
    if(root.length < 1){
      let linkabout = new set({
        title : 'LinkAbout',
        createdBy : '이석원',
        views:0,
      })
      let people = new set({
        title : 'People',
        createdBy : '이석원',
        views: 0,
      })

      linkabout.down = [people._id];

      people.save();
      root.save();
    }
    let content = ssr();
    let rendered = template(content);
    res.send(rendered);
    //res.redirect('set/'+root[0]._id);
  });
});

module.exports = router;
