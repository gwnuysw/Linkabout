const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');
let link = require('../schemas/link');

router.get('/:userid', function(req,res,next){//mypage 클릭하면 여기로 온다.
  let puginform;
  console.log('유저', req.user);
  set.find({personal: req.user._id, ancestortitle : 'LinkAbout'})
  .then((rootset)=>{
    console.log('루트셋',rootset);
    res.redirect('/userset/'+rootset[0]._id+"/"+req.params.userid);
  });
});
router.get('/find/user', function(req, res, next){
  let puginform;
  Promise.all([
    set.find({ancestortitle: 'LinkAbout', personal : {$ne:null}}),
  ])
  .then(([userset])=>{
    console.log(userset);
    puginform = {
      isAuthed : req.isAuthenticated(),
      users : userset,
    }
    res.render('public/userlist', puginform);
  });
});
module.exports = router;
