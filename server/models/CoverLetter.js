const mongoose = require('mongoose')

const coverLetterSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    company: String,

    role: String,

    content: String,

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('CoverLetter', coverLetterSchema)