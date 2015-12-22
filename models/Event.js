var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var EventSchema = new mongoose.Schema ({
  plannerName: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  eventName: {required: true, type: String},
  date: Date,
  pic: String,
  time: String,
  location: String,
  textBody: String,
  comments: [{
   creatorId: String,
   creatorName: String,
   title: String,
   content: String,
   photo: String,
   video: String,
   avi: String,
 }],
 tags: [],

});

mongoose.model('Event', EventSchema);
