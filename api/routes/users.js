require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/login',function (req, res, next) {//登入
  if (req.session.logined) {
    res.redirect('/');
    return;
  }
  res.render('users/login');
});
router.get('/register',function (req, res, next) {//註冊
  if (req.session.logined) {
    res.redirect('/');
    return;
  }
  res.render('users/register');
});

router.get('/logOut', function (req, res, next) {
  req.session.username = '';
  req.session.logined = false;
  res.redirect('/');
  res.end();
});

module.exports = router;
