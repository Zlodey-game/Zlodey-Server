var express = require('express');
var router = express.Router();

const userModel = require('../model/users')
const user = new userModel()


router.post('/register', (req, res)=> {
  user.id = req.body.id;
  user.nickname = req.body.nickname;
  user.pw = req.body.pw;

  user.save((err, result)=> {
      if(!err) {
        console.log("register success");
        res.send("success");
      }
  });
});

router.post('/login', (req, res)=> {
  userModel.find({ id: req.body.id }, (err, result)=> {
    if(!err) {
      let msg;

      if(result.length == 0) {  // no user
        msg = "no user";
      } else {
        if(result[0].pw != req.body.pw) {
          msg = "wrong pw";
        } else {
          req.session.userID = req.body.id;
          msg = "success";
        }
      }

      console.log(msg);
      res.send(msg);
    }
  });
});

router.get('/logout', (req, res)=> {
  req.session.destroy();
  res.send("success");
});

module.exports = router;