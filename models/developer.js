const developers = [
    {name: "Philly Steak",      id: 1, skills: ["HTML","JS","JQuery","CSS"]},
    {name: "Frizzle Mynizzle",  id: 2, skills: ["Eating","Sleeping","Playing Golf"]},
    {name: "Ken Karen",         id: 3, skills: ["Judging","Scoffing","Patronizing"]},
];

module.exports = {
    getAll,
    getOne
}

function getOne(id) {
    id = parseInt(id);
    return developers.find(dev => dev.id === id);
}

function getAll() {
    return developers;
}