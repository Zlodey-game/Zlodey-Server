const express = require('express');
const router = express.Router();

const statusModel = require('../model/status')
const status = new statusModel()

/* GET users listing. */
router.get('/', (req, res) => {
  statusModel.find({}, (err, result) =>{
    if(!err) {
      res.send(result);
    }
  })
});

router.post('/', (req, res)=>{
  status.atk = req.body.atk;
  status.def = req.body.def;
  status.agi = req.body.agi;
  status.hp = req.body.hp;

  status.updateOne((err, result)=>{
    if(!err) {
      // send to client result
    }
  })
})

module.exports = router;