// build your `/api/tasks` router here
const express = require('express');

const Task = require('./model')

const router = express.Router();

router.get('/', async (req,res, next) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const taskData = req.body;
    try {
        const added = await Task.add(taskData)
        res.json(added)
    } catch(err) {
        next(err)
    }
})

module.exports = router;