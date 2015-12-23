var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  username: {required: true, unique: true, type: String, lowercase: true, trim: true},
  email: String,
  created: Date,
  deleted: Date,
  passwordHash: String,
  salt: String,
  avatar: String,
  color: String,
  tagLine: String,
  joined: Date,
  bandName: String,
  events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
  instruments: [{
    type: String,
    player: String
  }],
  profileFBlink: String,
  profileTWlink: String,
  profileSClink: String,
  profileYTlink: String,
  setClock: Number,
  setBreak: Number,
  photo: [{
    type: String,
    caption: String
  }],
  video: [{
    type: String,
    name: String,
    bandVid: String
  }],
  music: [{
    type: String,
    artist: String,
    title: String,
  }]
});

UserSchema.methods.setPassword = function(password) {
  // console.log(password);
  this.salt = crypto.randomBytes(16).toString('hex');
  // console.log(this.salt);
	this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  // console.log(this.passwordHash);
};

UserSchema.methods.checkPassword = function(password) {
  var passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return (passwordHash === this.passwordHash);
};

UserSchema.methods.createToken = function() {
  return jwt.sign({
    _id: this._id,
    username: this.username
  }, "RGB_Fun");
};

mongoose.model('User', UserSchema);

// var UserSchema = new mongoose.Schema ({
//
//
//   msgcount: Number,
//   color: String,
//   created: Date,
//   tagLine: String,
//   score: { type: Number, default: 0 },
//   friends: [{
//     name: String
//   }],
//   inmessage: [{
//     to: String,
//     from: String,
//     body: String,
//     sent: Date,
//     senderId: String,
//   }],
//   outmessage: [{
//     to: String,
//     from: String,
//     body: String,
//     recieved: Date,
//     recieverId: String,
// }]
//
// });
