const express = require('express');
const router = express.Router();
const db = require('../dashboard.json');

//var stream = JSONStream.parse('rows.*.doc');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'HIDIVE',
      dashboard: db
  });
});



module.exports = router;
