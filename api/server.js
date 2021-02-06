
const express = require('express')
const helmet = require('helmet')

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to the server!"})
})

module.exports = server;