const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  name: String,
  email: String,
  phone: String,
  address: String,

  linkedin: String,
  github: String,

  jobTitle: String,
  summary: String,

  skills: String,
  education: String,
  experience: String,

  projects: String,
  certifications: String,
  achievements: String,
  languages: String,

  template: String

}, {
  timestamps: true
})

module.exports =
  mongoose.model('Resume', resumeSchema)