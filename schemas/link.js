const mongoose = require('mongoose');

const {Schema} = mongoose;
const {Types: {ObjectId}} = Schema;
const linkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  belong:{
    type: [ObjectId],
    required: true,
    ref: 'set',
  },
  views: {
    type: String,
    required: true,
  },
  text:{
    type: String,
    required: false,
  },
  author:{
    type: String,
    required: true,
  },
  link:{
    type: String,
    required: false,
  },
  linktype:{
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('link', linkSchema);
