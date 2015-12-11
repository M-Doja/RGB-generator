var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = mongoose.model('User');
var Palette = mongoose.model('Palette');
var jwt = require('express-jwt');
var passport = require('passport');

// this how server knows if user is legit or not
var auth = jwt({
  secret: 'RGB_Fun',
  userProperty: 'payload'
});

router.param('id', function(req,res,next,id){
  console.log(id);
User.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a user with that id"});
  req.user = result;
  next();
  });
});

router.post('/register', function(req, res, next) {
  console.log('hi there');
  var user = new User(req.body);
  user.setPassword(req.body.password);
  user.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("There was an issue registering that user.");
    console.log(result);
    vm.user.username = result.username;
    res.send(result.createToken());
  });
});

router.post('/login',  function(req, res, next) {
  console.log('log in please');
  passport.authenticate('local', function(err, result){
    if(err)return next(err);
    console.log(result);
    res.send(result.createToken());
  })(req, res, next);
});



module.exports = router;
