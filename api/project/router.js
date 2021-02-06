// build your `/api/projects` router here
const express = require('express');

const project = require('./model');

const router = express.Router();

router.get('/', async (req,res, next) => {
    try {
        const projects = await project.find()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const projectData = req.body;
    try {
        const added = await project.add(projectData)
        res.json(added)
    } catch(err) {
        next(err)
    }
})

module.exports = router;