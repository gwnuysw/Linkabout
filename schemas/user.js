const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nick:{
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', userSchema);
