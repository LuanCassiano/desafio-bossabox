const mongoose = require('../../database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../../config/auth')

const userSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function hashPassword(next) {
    if(!this.isModified('password')) next();

    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods = {
    compareHash(password) {
        return bcrypt.compare(password, this.password);
    }
}

userSchema.statics = {
    generateToken({ id }) {
        return jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn
        })
    }
}

const user = mongoose.model('user', userSchema);
module.exports = user