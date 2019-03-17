const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true
  },
  snapId: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  roles: [{
    type: String,
  }]
}, {
  versionKey: false
});


module.exports = mongoose.model('User', UserSchema);
