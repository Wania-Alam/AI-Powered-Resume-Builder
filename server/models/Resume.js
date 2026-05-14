const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    personalInfo: Object,
    education: Array,
    experience: Array,
    skills: Array,
    summary: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Resume', resumeSchema)