// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = {
    find, 
    add
}

function find() {
    return db('resources')
}

function add(resources) {
    return db('resources').insert(resources)
}

