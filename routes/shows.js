const express = require('express');
const router = express.Router();
const dashboard = require('../dashboard.json');
const _ = require('lodash');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shows', {
        title: 'HIDIVE:Shows',
        dashboard,
        _,
        titles: []

    });

});




module.exports = router;
