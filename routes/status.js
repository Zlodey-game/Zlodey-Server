const express = require('express');
const router = express.Router();

const statusModel = require('../model/status')
const status = new statusModel()

router.get('/new', (req, res) => {
  console.log(req.session);
  statusModel.create({ userID: req.session.userID }, (err, result)=> {
    if(!err) {
      console.log("success");
      res.send(result);
    }
  });
});

router.get('/', (req, res) => {
  statusModel.find({ userID: req.session.userID }, (err, result) =>{
    if(!err) {
      res.send(result[0]);
    }
  });
});

// when game is shut down
router.post('/all', (req, res) => {
  statusModel.updateOne({ userID: req.session.userID }, { 
    curHp: req.body.curHp,
    mp: req.body.mp,
    exp: req.body.exp
  }, (err, result) => {
    if(!err) {
      console.log("atk success");
      res.send("atk success");
    }
  });
});

router.post('/atk', (req, res) => {
  statusModel.updateOne({ userID: req.session.userID }, { atk: req.body.atk }, (err, result) => {
    if(!err) {
      console.log("atk success");
      res.send("atk success");
    }
  });
});

router.post('/def', (req, res) => {
  statusModel.updateOne({ userID: req.session.userID }, { def: req.body.def }, (err, result) => {
    if(!err) {
      console.log("def success");
      res.send("def success");
    }
  });
});

router.post('/agi', (req, res) => {
  statusModel.updateOne({ userID: req.session.userID }, { agi: req.body.agi }, (err, result) => {
    if(!err) {
      console.log("agi success");
      res.send("agi success");
    }
  });
});

router.post('/hp', (req, res) => {
  statusModel.updateOne({ userID: req.session.userID }, { hp: req.body.hp }, (err, result) => {
    if(!err) {
      console.log("hp success");
      res.send("hp success");
    }
  });
});

router.post('/exp', (req, res) => {
  statusModel.updateOne({ userID: req.session.userID }, { exp: req.body.exp }, (err, result) => {
    if(!err) {
      console.log("exp success");
      res.send("exp success");
    }
  });
});

module.exports = router;