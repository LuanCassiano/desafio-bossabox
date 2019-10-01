const User = require('../models/User')

class AuthController {

    async store(req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({ email })
    
            if(!user) {
                return res.status(400).json({
                    error: 'Check your credentials'
                })
            }
    
            if(!(await user.compareHash(password))) {
                return res.status(400).json({
                    error: 'Check your credentials'
                })
            }
    
            res.status(200).json({
                user,
                token: User.generateToken(user)
            })
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
}

module.exports = new AuthController()