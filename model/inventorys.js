const mongoose = require('mongoose');

const { Schema } = mongoose;

const inventorySchema = new Schema({
  userID: { type: String },

  1: { type: Number, default: 0 },
  2: { type: Number, default: 0 },
  3: { type: Number, default: 0 },
  4: { type: Number, default: 0 },
  5: { type: Number, default: 0 },
  6: { type: Number, default: 0 },
  7: { type: Number, default: 0 },
  8: { type: Number, default: 0 },
  9: { type: Number, default: 0 },
});

module.exports = mongoose.model('inventory', inventorySchema);
