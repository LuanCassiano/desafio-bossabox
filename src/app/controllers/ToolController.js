const Tool = require('../models/Tool')

class ToolController {

    async index(req, res) {

        try {
            if(req.query.tag) {
                const tools = await Tool.find({ tags: req.query.tag }).sort({ createdAt: -1 })
    
                return res.status(200).json(tools)
            }
    
            const tools = await Tool.find().sort({ createdAt: -1 })
    
            return res.status(200).json(tools)
            
        } catch (error) {
            return error.message
        }
    }

    async show(req, res) {
        try {
            const tool = await Tool.findById(req.params.id)
    
            return res.status(200).json(tool)
            
        } catch (error) {
            return error.message
        }
    }

    async store(req, res) {
        try {
            const tool = await Tool.create({ ...req.body, user: req.userId })
    
            return res.status(201).json(tool)
            
        } catch (error) {
            return error.message
        }
    }

    async update(req, res) {
        try {
            const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
    
            return res.status(200).json(tool)   
        } catch (error) {
            return error.message
        }
    }

    async destroy(req, res) {
        try {
            await Tool.findByIdAndRemove(req.params.id)

            return res.status(204).json({
                status: 'removed'
            })
        } catch (error) {
            return error.message
        }
    }
}

module.exports = new ToolController()