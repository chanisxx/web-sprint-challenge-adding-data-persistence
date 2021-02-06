// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    find, 
    add
}

function find() {
    return db('tasks')
}

function add(task) {
    return db('tasks')
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .insert(task)
}
