var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
userName: {type: String, lowercase: true, trim: true},
email: { unique: true, type:String, lowercase: true, trim: true},
isValidated: Boolean, // Checks if the user has been validated via email
rand: Number,
msgcount: Number,
color: String,
tagLine: String,
create: Date,
pic: String,
inmessage: [{
  to: String,
  from: String,
  body: String,
  sent: Date,
  senderId: String,
}],
outmessage: [{
  to: String,
  from: String,
  body: String,
  recieved: Date,
  recieverId: String,
}],
message: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
joined: Date,
passwordHash: String,
salt: String,
summary: String,
facebook: {
id: String,
token: String,
email: String,
name: String,
lastName: String,
photo: String
}
});

UserSchema.methods.setPassword = function(password) {
 this.salt = crypto.randomBytes(16).toString('hex');
    this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.checkPassword = function(password) {
 var passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
 return (passwordHash === this.passwordHash);
};

UserSchema.methods.generateJWT = function() {
 return jwt.sign({
   _id: this._id,
   name: this.name,
   lastName: this.lastName,
   email: this.email,
   pic: this.pic,
   userName: this.userName,
   followerID: this.followerID,
   followerName: this.followerName

 },  "CoderCamps"); //Add Passcode here
};



mongoose.model('User', UserSchema);
