var express = require('express');
var router = express.Router();
let set = require('../schemas/set');
let rootSet = '5c358828c7f4dc540bcda0df';
/* GET home page. */
router.get('/', function (req, res, next) {
  //console.log('set id is ', req.params.setid, req.params.settitle);
  set.find({ancestor: rootSet})
  .then((children)=>{
    let puginform = {
      isAuthed: req.isAuthenticated(),
      children: children,
      cursetid: rootSet,
      cursettitle: 'LinkAbout'
    };
    res.render('set',puginform);
  })
});
router.get('/subset/:setid/:settitle', function (req, res, next) {
  let puginform;
  let ancestor;

  Promise.all([
    set.find({ancestor: req.params.setid}),
    set.find({_id: req.params.setid})
  ])
  .then(([children, curset]) => {
    puginform = {
      isAuthed : req.isAuthenticated(),
      children : children,
      cursetid : req.params.setid,
      cursettitle : req.params.settitle,
    }
    ancestor = curset[0].ancestor;
  })
  .then(()=>{
    if( ancestor === undefined ){
      res.redirect('/');
    }
    else{
      set.find({_id: ancestor})
      .then((upperset)=>{
        puginform.uppersetid = upperset[0]._id;
        puginform.uppersettitle = upperset[0].title;
        console.log('upper',puginform.uppersetid,puginform.uppersettitle);
        res.render('set', puginform);
      })
      .catch(()=>{
      });
    }
  });

});
module.exports = router;
