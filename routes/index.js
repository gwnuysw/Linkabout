var express = require('express');
var router = express.Router();
let set = require('../schemas/set');
let currentSet = '5c358828c7f4dc540bcda0df';
/* GET home page. */
router.get('/', function (req, res, next) {
  set.find({ancestor: currentSet})
  .then((sets)=>{
    let puginform = {
      isAuthed: req.isAuthenticated(),
      sets: sets,
      title: 'InBetter',
      cursetid: currentSet,
      cursettitle: 'InBetter'
    };
    res.render('set',puginform);
  })
});

module.exports = router;
