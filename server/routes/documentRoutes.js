const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const {
  createDocument,
  getMyDocuments,
  getSingleDocument,
  deleteDocument
} = require('../controllers/documentController')

router.post('/create', auth, createDocument)

router.get('/my-documents', auth, getMyDocuments)

router.get('/single/:id', auth, getSingleDocument)

router.delete('/delete/:id', auth, deleteDocument)

module.exports = router