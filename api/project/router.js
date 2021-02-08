// build your `/api/projects` router here
const express = require('express');

const project = require('./model');

const router = express.Router();

router.get('/', async (req,res, next) => {
    try {
        const projects = await project.find()
        const mutatedProjects = projects.map(project => {return {...project, project_completed: project.project_completed ? true : false}})
        res.json(mutatedProjects)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const projectData = req.body;
    try {
        const addedProject = await project.add(projectData)
        res.status(201).json({...addedProject, project_completed: addedProject.project_completed ? true : false})
    } catch(err) {
        next(err)
    }
})

module.exports = router;