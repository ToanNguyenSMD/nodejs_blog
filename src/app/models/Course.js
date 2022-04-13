const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);

const Course = new Schema({
  author: ObjectId,
  name: { type: String, required: true},
  image: { type: String},
  desc: { type: String},
  videoId: {type: String, required: true},
  level: {type: String},
  slug: { type: String, slug: 'name', unique: true }
 
}, {
  timestamps: true
});

Course.plugin(mongooseDelete, { 
  overrideMethods: 'all',
  deletedAt : true,
 })

module.exports = mongoose.model('Course', Course);