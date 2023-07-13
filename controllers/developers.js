// controllers/developers.js

const Dev = require('../models/developer')

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('developers/index', {
        devs: Dev.getAll()
    });
  }

function show(req, res) {
    res.render('developers/show', {
        dev: Dev.getOne(req.params.id)
    });
  }