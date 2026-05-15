const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    title: String,

    template: String,

    personalInfo: Object,

    summary: String,

    skills: [String],

    education: [Object],

    experience: [Object],

    projects: [Object],

    atsScore: Number,

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Resume', resumeSchema)