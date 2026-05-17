const Document = require('../models/Document')

// CREATE
exports.createDocument = async (req, res) => {

  try {

    const document = await Document.create({

      user: req.user.id,

      type: req.body.type,

      title: req.body.title,

      content: req.body.content

    })

    res.status(201).json(document)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: 'Failed to create document'
    })
  }
}

// GET ALL
exports.getMyDocuments = async (req, res) => {

  try {

    const docs = await Document.find({
      user: req.user.id
    }).sort({ createdAt: -1 })

    res.json(docs)

  } catch (err) {

    res.status(500).json({
      message: 'Failed to fetch documents'
    })
  }
}

// GET SINGLE
exports.getSingleDocument = async (req, res) => {

  try {

    const doc = await Document.findById(
      req.params.id
    )

    res.json(doc)

  } catch (err) {

    res.status(500).json({
      message: 'Failed'
    })
  }
}

// DELETE
exports.deleteDocument = async (req, res) => {

  try {

    await Document.findByIdAndDelete(
      req.params.id
    )

    res.json({
      message: 'Deleted'
    })

  } catch (err) {

    res.status(500).json({
      message: 'Failed'
    })
  }
}