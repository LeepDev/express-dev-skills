var express = require('express');
var router = express.Router();
var devsCtrl = require('../controllers/developers');

// start path - /developers
router.get('/', devsCtrl.index);       // GET /developers
router.get('/:id', devsCtrl.show);    // GET /developers/:id

module.exports = router;
