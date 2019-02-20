var express = require('express');
var router = express.Router();
let set = require('../schemas/set');

/* GET home page. */
router.get('/', function (req, res, next) {
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
    root.save()
    .then((result)=>{
      console.log(result);
      res.redirect('set/'+result._id);
    })
  })

});

module.exports = router;
