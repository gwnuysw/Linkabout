const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');
let link = require('../schemas/link');

router.get('/content/:cursetid/:cursettitle/:linkid',function(req,res,next){
  let puginform;
  link.find({_id:req.params.linkid})
  .then((content)=>{
    puginform = {
      isAuthed: req.isAuthenticated(),
      cursetid: req.params.cursetid,
      cursettitle: req.params.cursettitle,
      content: content[0],
    }
    console.log(content[0]);
    res.render('linkcontent',puginform);
  });

});
router.get('/:cursetid/:cursettitle', function (req, res, next){
  let puginform;

  Promise.all([
    link.find({belong : req.params.cursetid}),
    set.find({_id: req.params.cursetid})
  ])
  .then(([links, curset])=>{
    puginform = {
      isAuthed : req.isAuthenticated(),
      cursetid : req.params.cursetid,
      cursettitle : req.params.cursettitle,
      links : links,
      uppersetid: curset[0].ancestor,
      uppersettitle: curset[0].ancestortitle,
    }
    res.render('linklist', puginform);
  })
  .catch(()=>{
  });
});
router.get('/newlinkform/:cursetid/:cursettitle', isLoggedIn, function (req, res, next) {
  let puginform;

  set.find({_id: req.params.setid})
  .then((curset) => {
    puginform = {
      isAuthed : req.isAuthenticated(),
      cursetid : req.params.cursetid,
      cursettitle : req.params.cursettitle,
    }
    res.render('newlinkform', puginform);
  });
});

router.post('/newlink/:cursetid/:cursettitle', isLoggedIn, function (req, res, next) {
  let newlink = new link({
    title : req.body.title,
    createdBy : req.user.nick,
    belong : req.params.cursetid,
    text : req.body.text,
    author : req.body.author,
    link : req.body.link,
    views : 0,
  });
  newlink.save()
  .then((result)=>{
    console.log(result);
    res.redirect('/link/'+req.params.cursetid+'/'+req.params.cursettitle);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
