var express = require('express');
var router = express.Router();
var devsCtrl = require('../controllers/developers');

// start path - /developers
router.get('/', devsCtrl.index);                    // GET      /developers
router.get('/new', devsCtrl.new);                   // GET      /developers/new
router.get('/:id', devsCtrl.show);                  // GET      /developers/:id
router.get('/:id/edit', devsCtrl.edit);             // GET      /developers/:id/edit
router.post('/', devsCtrl.create);                  // POST     /developers
router.delete('/:id', devsCtrl.delete);             // DELETE   /developers/:id
router.delete('/:id/:skill', devsCtrl.deleteSkill); // DELETE   /developers/:id/:skill
router.put('/:id', devsCtrl.update);         // PUT      /developers/:id

module.exports = router;
