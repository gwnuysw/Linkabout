const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');

router.get('/newsetform/:setid/:settitle', isLoggedIn, function (req, res, next) {
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
      res.render('newsetform', puginform);
    }
    else{
      set.find({_id: ancestor})
      .then((upperset)=>{
        puginform.uppersetid = upperset[0]._id;
        puginform.uppersettitle = upperset[0].title;
        console.log('upper',puginform.uppersetid,puginform.uppersettitle);
        res.render('newsetform', puginform);
      })
      .catch(()=>{
      });
    }
  });
});

router.post('/newset/:setid/:settitle', isLoggedIn, function (req, res, next) {
  let newset = new set({
    title : req.body.title,
    createdBy : req.user.nick,
    ancestor : req.params.setid,
    views : 0,
  });
  newset.save()
  .then((result)=>{
    console.log(result);
    res.redirect('/subset/'+req.params.setid+'/'+req.params.settitle);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
