const { update } = require("../controllers/developers");

const developers = [
    {name: "Philly Steak",      id: 1, skills: ["HTML","JS","JQuery","CSS"]},
    {name: "Frizzle Mynizzle",  id: 2, skills: ["Eating","Sleeping","Playing Golf"]},
    {name: "Ken Karen",         id: 3, skills: ["Judging","Scoffing","Patronizing"]},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill,
    deleteOne,
    updateOne
}

function updateOne(id, updatedDev) {
    id = parseInt(id);
    updatedDev.id = id;
    if (updatedDev.skills)
        updatedDev.skills = updatedDev.skills.split(',');
    else
        updatedDev.skills = [];
    const dev = developers.find(dev => dev.id === id);
    Object.assign(dev, updatedDev);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = developers.findIndex(dev => dev.id === id);
    developers.splice(idx,1);
}

function deleteSkill(id, skill) {
    id = parseInt(id);
    const dev = developers.find(dev => dev.id === id);
    dev.skills = dev.skills.filter(s => s !== skill);
}

function create(dev) {
    let lastDev = developers.slice(-1);
    if (lastDev)
        dev.id = parseInt(lastDev[0].id)+1;
    else
        dev.id = 1;
    if (dev.skill)
        dev.skills = dev.skills.split(',');
    else
        dev.skills = [];
    developers.push(dev);
}

function getOne(id) {
    id = parseInt(id);
    return developers.find(dev => dev.id === id);
}

function getAll() {
    return developers;
}