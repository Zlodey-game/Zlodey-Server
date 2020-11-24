const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  id: { type: String },
  nickname: { type: String },
  pw: { type: String },
});

module.exports = mongoose.model('user', userSchema);
