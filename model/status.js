const mongoose = require('mongoose');

const findOrCreate = require('mongoose-find-or-create');

const { Schema } = mongoose;

const statusSchema = new Schema({
  userID: { type: String },

  atk: { type: Number, default: 1 },
  def: { type: Number, default: 1 },
  agi: { type: Number, default: 1 },
  hp: { type: Number, default: 1 },

  curHp: { type: Number, default: 20 },
  mp: { type: Number, default: 20 },

  level: { type: Number, default: 1 },
  exp: { type: Number, default: 0 },
  skillPoint: { type: Number, default: 0 },
});
statusSchema.plugin(findOrCreate);

module.exports = mongoose.model('status', statusSchema);
