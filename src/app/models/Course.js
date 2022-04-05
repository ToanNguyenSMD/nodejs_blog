const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  author: ObjectId,
  name: { type: String, maxLength:255},
  image: { type: String, maxlength: 255},
  desc: { type: String, maxlength: 600},
  slug: { type: String, maxlength: 255},
  videoId: {type: String, maxlength: 255},
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
 
});

module.exports = mongoose.model('Course', Course);