const express = require('express');

const router = express.Router();

const assert = require('assert');

const UserModel = require('../model/users');

const user = new UserModel();

router.post('/register', (req, res) => {
  user.id = req.body.id;
  user.nickname = req.body.nickname;
  user.pw = req.body.pw;

  user.save((err) => {
    assert.strictEqual(err, null);
    console.log('register success');
    res.send('register success');
  });
});

router.post('/login', (req, res) => {
  UserModel.findOne({ id: req.body.id }, (err, result) => {
    assert.strictEqual(err, null);
    let msg;

    if (result.length === 0) {
      msg = 'no user';
    } else if (result.pw !== req.body.pw) {
      msg = 'wrong pw';
    } else {
      req.session.userID = req.body.id;
      msg = 'login success';
    }

    console.log(msg);
    res.send(msg);
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('logout success');
});

module.exports = router;
