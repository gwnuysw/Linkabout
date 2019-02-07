const mongoose = require('mongoose');

const {Schema} = mongoose;
const {Types: {ObjectId}} = Schema;
const setSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  ancestor:{
    type: ObjectId,
    ref: 'set',
  },
  ancestortitle:{
    type: String,
    ref: 'set',
  },
  views: {
    type: String,
    required: true,
  },
  personal:{
    type: ObjectId,
    required: false,
    ref: 'user'
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('set', setSchema);