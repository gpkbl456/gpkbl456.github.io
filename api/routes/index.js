require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var image = mongoose.model('image');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index")
  console.log(req.session.username);
  console.log(req.session.logined);
  res.locals.username = req.session.username;
  res.locals.authenticated = req.session.logined;
  if (res.locals.username) {
    var title = res.locals.username;
  }else {
    var title = '鄉民';
  }
  image.find(function (err, images, count) {
    res.render('index', {
      title: title,
      images: images
    });
  });
});

module.exports = router;
