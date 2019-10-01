const User = require('../models/User')

class UserController {

    async store(req, res) {
        const { email } = req.body

        try {
            
            if(await User.findOne({ email })) {
                return res.status(400).json({
                    error: 'User already exists'
                })
            }

            const user = await User.create(req.body)

            user.password = undefined

            return res.status(201).json(user)

        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
}

module.exports = new UserController()