const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  itemID: { type: Number },
  name: { type: String },
  type: { type: String },
  drop: { type: Number },

  atk: { type: Number, default: 0 },
  def: { type: Number, default: 0 },
  agi: { type: Number, default: 0 },
  hp: { type: Number, default: 0 },
});

module.exports = mongoose.model('item', itemSchema);
