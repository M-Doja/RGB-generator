var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = mongoose.model('User');
// var Palette = mongoose.model('Palette');
var jwt = require('express-jwt');
var passport = require('passport');
var auth = jwt({
  secret: 'RGB_Fun',
  userProperty: 'payload'
});

// LOOKING FOR 'ID'
router.param('id', function(req,res,next,id){
  console.log(id);
User.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a user with that id"});
  req.user = result;
  next();
  });
});

// NEW USER REGISTRATION
router.post('/register', function(req, res, next) {
  console.log('hi there');
  var user = new User(req.body);
  user.setPassword(req.body.password);
  user.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("There was an issue registering that user.");
    console.log(result);
    // req.status.username = result.username;
    res.send(result.createToken());
  });
});

// RETURNING USER LOGIN
router.post('/login',  function(req, res, next) {
  console.log('log in please');
  passport.authenticate('local', function(err, result){
    if(err)return next(err);
    console.log(result);
    res.send(result.createToken());
  })(req, res, next);
});

// PHOTO UPLOAD
router.put('/:id/pic', function(req, res, next) {
  User.update({
      _id: req.params.id
    }, {
      pic: req.body.url,
    },
    function(err, result) {
      if (err) return next(err);
      if (!result) return next("Could not create the object. Please check all fields.");
      res.send(req.body.url);
    });
});

// SAVE COLOR
router.post('/', function(req, res, next) {
  var palette = new Palette(req.body);
  palette.color = req.payload.color;
  exec(function(err, result) {
    if(err) return next(err);
    if(!result) return next(err);
    res.send(result);
  });
});


module.exports = router;
