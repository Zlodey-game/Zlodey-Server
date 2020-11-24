const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log(req.session.userID);
  res.send(req.session.userID);
});

module.exports = router;
