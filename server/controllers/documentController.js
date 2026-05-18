const Document = require('../models/Document')

// =========================
// CREATE DOCUMENT
// =========================

exports.createDocument = async (req, res) => {

  try {

    const document = await Document.create({

      ...req.body,

      user: req.userId

    })

    res.status(201).json(document)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: err.message
    })

  }
}

// =========================
// GET MY DOCUMENTS
// =========================

exports.getMyDocuments = async (req, res) => {

  try {

    const documents = await Document.find({
      user: req.userId
    }).sort({ createdAt: -1 })

    res.json(documents)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: err.message
    })

  }
}

// =========================
// GET SINGLE DOCUMENT
// =========================

exports.getSingleDocument = async (req, res) => {

  try {

    const document = await Document.findOne({
      _id: req.params.id,
      user: req.userId
    })

    if (!document) {
      return res.status(404).json({
        message: 'Document not found'
      })
    }

    res.json(document)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: err.message
    })

  }
}

// =========================
// UPDATE DOCUMENT
// =========================

exports.updateDocument = async (req, res) => {

  try {

    const document = await Document.findOneAndUpdate(

      {
        _id: req.params.id,
        user: req.userId
      },

      req.body,

      { new: true }

    )

    res.json(document)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: err.message
    })

  }
}

// =========================
// DELETE DOCUMENT
// =========================

exports.deleteDocument = async (req, res) => {

  try {

    await Document.findOneAndDelete({

      _id: req.params.id,
      user: req.userId

    })

    res.json({
      message: 'Document deleted'
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: err.message
    })

  }
}