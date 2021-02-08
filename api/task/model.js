// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    find, 
    add,
    findById
}

function find() {
    return db('tasks')
}

function findById(id) {
    return db('tasks')
    .where({task_id: id})
    .first()
}

function add(task) {
    return db('tasks')
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .insert(task)
    .then(id => {
        return findById(id[0])
    })
}
