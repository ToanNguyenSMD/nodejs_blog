const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  author: ObjectId,
  name: { type: String, required: true},
  image: { type: String},
  desc: { type: String},
  slug: { type: String},
  videoId: {type: String, required: true},
  level: {type: String},
 
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', Course);