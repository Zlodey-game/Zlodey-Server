var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session.userID);
  res.send(req.session.userID);
});

module.exports = router;
