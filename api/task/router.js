// build your `/api/tasks` router here
const express = require('express');

const Task = require('./model')

const router = express.Router();

router.get('/', async (req,res, next) => {
    try {
        const tasks = await Task.find()
        const mutatedTasks = tasks.map(task => {return {...task, task_completed: task.task_completed ? true : false}})
        res.status(200).json(mutatedTasks)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const taskData = req.body;
    try {
        const addedTask = await Task.add(taskData)
        res.status(201).json({...addedTask, task_completed: addedTask.task_completed ? true : false })
    } catch(err) {
        next(err)
    }
})

module.exports = router;