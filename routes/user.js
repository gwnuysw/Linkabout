const {isLoggedIn, isNotLoggedIn} = require('./checkLogin');

let express = require('express');
let router = express.Router();
let set = require('../schemas/set');
let user = require('../schemas/user');

router.get('/:userid', function(req,res,next){
  let puginform;
  console.log('유저', req.user)
  set.find({personal: req.user._id, ancestor : '5c358828c7f4dc540bcda0df'})
  .then((rootset)=>{
    res.redirect('/set/'+rootset[0]._id);
  })
});
module.exports = router;
