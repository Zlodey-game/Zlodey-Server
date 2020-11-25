const express = require('express');

const router = express.Router();

const assert = require('assert');

const InventoryModel = require('../model/inventorys');
const StatusModel = require('../model/status');

router.get('/', (req, res) => {
  if (req.session.userID !== undefined) {
    InventoryModel.findOrCreate({ userID: req.session.userID }, (err, inventory) => {
      assert.strictEqual(err, null);
      StatusModel.findOrCreate({ userID: req.session.userID }, (err, status) => {
        assert.strictEqual(err, null);
        res.render('road', { inventory, status });
      });
    });
  } else {
    res.redirect('./users/login');
  }
});

module.exports = router;
