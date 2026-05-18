const mongoose = require('mongoose')

const documentSchema =
  new mongoose.Schema({

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },

    title: String,

    type: String,

    fullName: String,

    company: String,

    position: String,

    recipient: String,

    sender: String,

    skills: String,

    experience: String,

    content: String

  }, {
    timestamps: true
  })

module.exports =
  mongoose.model(
    'Document',
    documentSchema
  )