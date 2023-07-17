// controllers/developers.js

const Dev = require('../models/developer')

module.exports = {
    index,
    show,
    new: newDev,
    create,
    delete: deleteDev,
    deleteSkill,
    edit,
    update
}

function update(req,res) {
    Dev.updateOne(req.params.id, req.body);
    res.redirect(`/developers/${req.params.id}`);
}

function edit(req,res) {
    res.render('developers/edit', { 
        dev: Dev.getOne(req.params.id) 
    });
}

function deleteSkill(req, res) {
    Dev.deleteSkill(req.params.id,req.params.skill);
    res.redirect('/developers');
}

function deleteDev(req, res) {
    Dev.deleteOne(req.params.id);
    res.redirect('/developers');
}

function create(req, res) {
    Dev.create(req.body);
    res.redirect('/developers');
}

function newDev(req, res) {
    res.render('developers/new');
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