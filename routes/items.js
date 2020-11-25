const express = require('express');

const router = express.Router();

const assert = require('assert');

const ItemModel = require('../model/items');

router.post('/', (req, res) => {
  ItemModel.findOne({ itemID: req.body.itemID }, (err, result) => {
    assert.strictEqual(err, null);
    res.send(result);
  });
});

router.get('/inventory', (req, res) => {
  let temp = {};
  const or = [];

  for (let i = 1; i <= 9; i++) {
    if (req.session.inventory[i] !== 0) {
      temp.itemID = req.session.inventory[i];
      or.push(temp);
      temp = {};
    }
  }

  ItemModel.find({ $or: or }, (err, result) => {
    assert.strictEqual(err, null);
    console.log(result);
    res.send(result);
  });
});

router.post('/add', (req, res) => {
  ItemModel.create(req.body, (err, result) => {
    assert.strictEqual(err, null);
    res.send(result);
  });
});

module.exports = router;
