const express = require('express');

const router = express.Router();

const assert = require('assert');

const StatusModel = require('../model/status');

router.post('/curStatus', (req, res) => {
  const status = {
    curHp: req.body.curHp,
    mp: req.body.mp,
    exp: req.body.exp,
  };

  StatusModel.updateOne({ userID: req.session.userID }, status, (err) => {
    assert.strictEqual(err, null);
    console.log('curStatus success');
    res.send('curStatus success');
  });
});

router.post('/', (req, res) => {
  const { stat } = req.query;

  StatusModel.updateOne({ userID: req.session.userID }, req.body, (err, result) => {
    assert.strictEqual(err, null);
    console.log(`${stat} change success`);
    res.send(result);
  });
});

router.post('/all', (req, res) => {
  StatusModel.updateOne({ userID: req.session.userID }, req.body, (err, result) => {
    assert.strictEqual(err, null);
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
