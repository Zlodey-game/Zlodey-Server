const express = require('express');

const router = express.Router();

const assert = require('assert');

const StatusModel = require('../model/status');

router.get('/', (req, res) => {
  StatusModel.findOne({ userID: req.session.userID }, (err, result) => {
    assert.strictEqual(err, null);
    if (result === null) {
      res.redirect('/status/new');
    } else {
      res.send(result);
    }
  });
});

router.get('/new', (req, res) => {
  StatusModel.create({ userID: req.session.userID }, (err) => {
    assert.strictEqual(err, null);
    console.log('status new success');
    res.send('status new success');
  });
});

// when game is shut down
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
  const status = { };
  const { stat } = req.query;
  status[stat] = req.body.stat;

  StatusModel.updateOne({ userID: req.session.userID }, status, (err) => {
    assert.strictEqual(err, null);
    console.log(`${stat} change success`);
    res.send(`${stat} change success`);
  });
});

module.exports = router;
