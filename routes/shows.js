const express = require('express');
const router = express.Router();
const db = require('../dashboard.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shows', {
        title: 'HIDIVE:Shows',
        dashboard: db

    });
});




module.exports = router;
