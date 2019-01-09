var express = require('express');
var router = express.Router();
let set = require('../schemas/set');
/* GET home page. */
router.get('/', function (req, res, next) {
  set.find({ancestor: '5c358828c7f4dc540bcda0df'})
  .then((sets)=>{
    let puginform = {
      isAuthed: req.isAuthenticated(),
      titles: sets,
    };
    res.render('categories',puginform);
  })
});

module.exports = router;
