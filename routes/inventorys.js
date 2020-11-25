const express = require('express');

const router = express.Router();

const assert = require('assert');

const InventoryModel = require('../model/inventorys');

router.get('/', (req, res) => {
  InventoryModel.findOne({ userID: req.session.userID }, (err, result) => {
    assert.strictEqual(err, null);
    if (result === null) {
      res.redirect('/inventorys/new');
    } else {
      req.session.inventory = result;
      res.redirect('/items/inventory');
    }
  });
});

router.get('/new', (req, res) => {
  InventoryModel.create({ userID: req.session.userID }, (err, result) => {
    assert.strictEqual(err, null);
    console.log(result);
    res.send('inventory new success');
  });
});

router.post('/', (req, res) => {
  const inventory = {};

  for (let i = 1; i <= Object.keys(req.body).length; i++) {
    inventory[i] = req.body[i];
  }

  InventoryModel.updateOne({ userID: req.session.userID }, inventory, (err, result) => {
    assert.strictEqual(err, null);
    console.log('inventory success');
    res.send(result);
  });
});

module.exports = router;
