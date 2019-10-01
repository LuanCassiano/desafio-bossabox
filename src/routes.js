const express = require('express')
const Routes = express.Router()

const AuthController = require('./app/controllers/AuthController')
const UserController = require('./app/controllers/UserController')
const ToolController = require('./app/controllers/ToolController')

const authMiddleware = require('./app/middlewares/auth')

Routes.post('/api/auth', AuthController.store)

Routes.post('/api/user', UserController.store)

Routes.use(authMiddleware)

Routes.get('/api/tools', ToolController.index)
Routes.get('/api/tools/:id', ToolController.show)
Routes.post('/api/tools', ToolController.store)
Routes.put('/api/tools/:id', ToolController.update)
Routes.delete('/api/tools/:id')

module.exports = Routes