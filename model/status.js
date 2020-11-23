const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    userID: { type: String },

    atk: { type: Number, default: 1 },
    def: { type: Number, default: 1 },
    agi: { type: Number, default: 1 },
    hp: { type: Number, default: 1 },

    curHp: { type: Number, default: 20 },
    mp: { type: Number, default: 20 },
    exp: { type: Number, default: 0 }
});

module.exports = mongoose.model('status', statusSchema);