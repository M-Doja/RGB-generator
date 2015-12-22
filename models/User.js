var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  username: {required: true, unique: true, type: String, lowercase: true, trim: true},
  email: String,
  created: Date,
  deleted: Date,
  passwordHash: String,
  salt: String
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
//   passwordHash: String,
//   salt: String,
//   email: {required: true, unique: true, type:String, lowercase: true, trim: true},
//   username: String
//   avatar: String,
//   fName: String,
//   lName: String,
//   joined: Date,
//   events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
//   msgcount: Number,
//   color: String,
//   created: Date,
//   tagLine: String,
//   score: { type: Number, default: 0 },
//   username: {required: true, unique: true, type: String, lowercase: true, trim: true},
//   bandName: String,
//   instruments: [{
//     type: String,
//     player: String
//   }],
//   friends: [{
//     name: String
//   }],
//   photo: [{
//     type: String,
//     caption: String
//   }],
//   video: [{
//     type: String,
//     name: String,
//     bandVid: String
//   }],
//   music: [{
//     type: String,
//     artist: String,
//     title: String,
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
// }],
//   profileFBlink: String,
//   profileTWlink: String,
//   profileGHlink: String,
//   profileLKlink: String
// });
