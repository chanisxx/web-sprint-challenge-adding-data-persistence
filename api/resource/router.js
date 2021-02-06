// build your `/api/resources` router here
const express = require('express');

const Resource = require('./model');

const router = express.Router();

router.get('/', async (req,res, next) => {
    try {
        const resources = await Resource.find()
        res.json(resources)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const resourceData = req.body;
    try {
        await Resource.add(resourceData)
        res.status(201).json(resourceData)
    } catch(err) {
        next(err)
    }
})


module.exports = router;