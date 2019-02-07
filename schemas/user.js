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
<<<<<<< HEAD
    required: true,
    unique: true,
=======
>>>>>>> 14a46ac1... 에효...카카오패스포트
  },
  nick:{
    type: String,
    required: true,
    unique: true,
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
