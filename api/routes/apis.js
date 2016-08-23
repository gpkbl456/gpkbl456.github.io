require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.post('/register', function (req, res, next) {
  new User({
    userName: req.body.userName,
    password: req.body.password
  }).save(function (err) {
    if (err) {
      console.log('Fail to save to DB.');
      return;
    }
    console.log('Save to DB.');
    res.redirect('/');
  });

});

router.post('/login', function (req, res, next) {
  User.find({
    userName: req.body.userName,
    password: req.body.password
  }, function (err, user, count) {
    if (err != null) {
      console.log('err: '+ err);
      console.log('user: '+ user);
      console.log('count: '+ count);
      res.redirect('/users/login');
    }else {
      console.log(req.session.username);
      console.log(user[0].userName);
      req.session.username = user[0].userName;
      req.session.passwd = user[0].password;
      req.session.logined = true;
      console.log("find_user");
      console.log(req.session.logined);
      res.redirect('/');
    }
  });
});

module.exports = router;
