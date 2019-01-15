var express = require('express');
var router = express.Router();
let set = require('../schemas/set');
let rootSet = '5c358828c7f4dc540bcda0df';
/* GET home page. */
router.get('/', function (req, res, next) {
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

module.exports = router;
