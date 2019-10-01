const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const toolSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    
    tags: [{
        type: String,
        required: true
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

toolSchema.plugin(mongoosePaginate)

const tool = mongoose.model('tool', toolSchema);
module.exports = tool